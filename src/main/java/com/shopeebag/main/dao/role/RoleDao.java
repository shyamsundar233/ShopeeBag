package com.shopeebag.main.dao.role;

import com.shopeebag.main.entity.Role;

public interface RoleDao {

    public Role findByName(String name);

    public void addRole(Role role);

}
