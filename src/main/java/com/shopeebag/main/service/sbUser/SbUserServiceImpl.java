package com.shopeebag.main.service.sbUser;

import com.shopeebag.main.dao.sbUser.SbUserDao;
import com.shopeebag.main.entity.SbUser;
import com.shopeebag.main.entity.Tenant;
import com.shopeebag.main.service.multiTenant.TenantService;
import com.shopeebag.main.service.role.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SbUserServiceImpl implements SbUserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SbUserServiceImpl.class);

    @Autowired
    private SbUserDao sbUserDao;

    @Autowired
    private RoleService roleService;

    @Autowired
    private TenantService tenantService;

    @Override
    public void saveUser(SbUser sbUser) {
        if(sbUser.getRole() == null){
            sbUser.setRole(roleService.getCustomerRole());
        }
        Tenant tenant = null;
        if(sbUser.getTenant() == null){
            tenant = tenantService.getNextTenant();
            sbUser.setTenant(tenant);
        }
        sbUserDao.saveUser(sbUser);
        if(tenant != null){
            tenantService.setTenantIsActive(tenant.getTenantId());
        }
    }
}
