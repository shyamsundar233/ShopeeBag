package com.shopeebag.main.multiTenant.repo;

import com.shopeebag.main.multiTenant.entity.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TenantRepo extends JpaRepository<Tenant, Long> {
}
