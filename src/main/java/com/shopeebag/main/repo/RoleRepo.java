package com.shopeebag.main.repo;

import com.shopeebag.main.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {

    Role findByRoleName(String roleName);

}
