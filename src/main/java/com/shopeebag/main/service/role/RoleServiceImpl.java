package com.shopeebag.main.service.role;

import com.shopeebag.main.dao.role.RoleDao;
import com.shopeebag.main.entity.Role;
import com.shopeebag.main.util.SbConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    @Override
    public Role getCustomerRole() {
        return roleDao.findByName(SbConstants.ROLE_CUSTOMER);
    }

    @Override
    public void addCustomerRole() {
        Role role = getCustomerRole();
        if(role == null){
            role = new Role();
            role.setRoleName(SbConstants.ROLE_CUSTOMER);
            roleDao.addRole(role);
        }
    }
}
