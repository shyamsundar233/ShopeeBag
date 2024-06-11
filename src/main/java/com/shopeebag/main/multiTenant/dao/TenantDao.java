package com.shopeebag.main.multiTenant.dao;

import com.shopeebag.main.multiTenant.entity.Tenant;

public interface TenantDao {

    public void addTenant(Tenant tenant);

    public Long tenantCount();

}
