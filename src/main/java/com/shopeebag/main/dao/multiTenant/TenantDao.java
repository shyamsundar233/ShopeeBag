package com.shopeebag.main.dao.multiTenant;

import com.shopeebag.main.entity.Tenant;

public interface TenantDao {

    public void addTenant(Tenant tenant);

    public Long tenantCount();

    public Tenant getNextTenant();

    public Tenant getTenant(Long id);

}
