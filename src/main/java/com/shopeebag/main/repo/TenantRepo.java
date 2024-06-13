package com.shopeebag.main.repo;

import com.shopeebag.main.entity.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TenantRepo extends JpaRepository<Tenant, Long> {

    Tenant findFirstByIsActiveFalse();

}
