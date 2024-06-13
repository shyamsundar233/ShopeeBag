package com.shopeebag.main.service.multiTenant;

import com.shopeebag.main.dao.multiTenant.TenantDao;
import com.shopeebag.main.entity.Tenant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TenantServiceImpl implements TenantService{

    @Autowired
    private TenantDao tenantDao;

    private static final Logger LOGGER = LoggerFactory.getLogger(TenantServiceImpl.class);

    @Override
    public Tenant addTenant(Tenant tenant) {
        LOGGER.info("Adding tenant {}", tenant);
        tenantDao.addTenant(tenant);
        return tenant;
    }

    @Override
    public Long tenantCount() {
        return tenantDao.tenantCount();
    }

    @Override
    public void loadInitTenantDetails() {
        if(tenantDao.tenantCount() == 0){
            long startRange = 1L;
            long endRange = 1000000L;
            for (int index = 0; index < 500; index++) {
                Tenant tenant = new Tenant();
                tenant.setStartRange(startRange);
                tenant.setEndRange(endRange);
                tenant.setActive(false);
                tenant.setNextUniqueId(startRange);
                tenantDao.addTenant(tenant);

                startRange = endRange + 1L;
                endRange = endRange + 1000000L;
            }
        }
    }

    @Override
    public Tenant getNextTenant() {
        return tenantDao.getNextTenant();
    }

    @Override
    public void setTenantIsActive(Long tenantId) {
        Tenant tenant = tenantDao.getTenant(tenantId);
        tenant.setActive(true);
        tenantDao.addTenant(tenant);
    }
}
