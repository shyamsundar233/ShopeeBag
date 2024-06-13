package com.shopeebag.main.dao.role;

import com.shopeebag.main.entity.Role;
import com.shopeebag.main.repo.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoleDaoImpl implements RoleDao{

    @Autowired
    private RoleRepo roleRepo;

    @Override
    public Role findByName(String name) {
        return roleRepo.findByRoleName(name);
    }

    @Override
    public void addRole(Role role) {
        roleRepo.save(role);
    }
}
