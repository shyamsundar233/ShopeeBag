package com.shopeebag.main.service.sbUser;

import com.shopeebag.main.dao.sbUser.SbUserDao;
import com.shopeebag.main.entity.SbUser;
import com.shopeebag.main.entity.Tenant;
import com.shopeebag.main.service.multiTenant.TenantService;
import com.shopeebag.main.service.role.RoleService;
import com.shopeebag.main.util.SbConstants;
import com.shopeebag.main.util.SbUserUtil;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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
            LOGGER.info("Role has been set to {} for {} user", SbConstants.ROLE_CUSTOMER, sbUser.getUsername());
        }
        Tenant tenant = null;
        if(sbUser.getTenant() == null){
            tenant = tenantService.getNextTenant();
            sbUser.setTenant(tenant);
            LOGGER.info("Tenant has been set to {} for {} user", tenant.getTenantId(), sbUser.getUsername());
        }
        sbUser.setEnabled(true);
        sbUserDao.saveUser(sbUser);
        if(tenant != null){
            tenantService.setTenantIsActive(tenant.getTenantId());
        }
    }

    @Override
    public void loadInitUserDetails(String source) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(source.equals("login")){
            User currentUserDetails = (User) auth.getPrincipal();
            SbUserUtil.currentUser = getUserByUsername(currentUserDetails.getUsername());;
        }else if(source.equals("logout")){
            SbUserUtil.currentUser = null;
        }
    }

    @Override
    public SbUser getUserByUsername(String username) {
        return sbUserDao.getUserByUsername(username);
    }

}
