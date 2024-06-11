package com.shopeebag.main.multiTenant.dao;

import com.shopeebag.main.multiTenant.entity.Tenant;
import com.shopeebag.main.multiTenant.repo.TenantRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TenantDaoImpl implements TenantDao{

    @Autowired
    private TenantRepo tenantRepo;

    private static final Logger LOGGER = LoggerFactory.getLogger(TenantDaoImpl.class);

    @Override
    public void addTenant(Tenant tenant) {
        tenantRepo.save(tenant);
        LOGGER.info("Added tenant {}", tenant);
    }

    @Override
    public Long tenantCount() {
        LOGGER.info("Tenant count {}", tenantRepo.count());
        return tenantRepo.count();
    }

}
