package com.shopeebag.main.multiTenant.service;

import com.shopeebag.main.multiTenant.entity.Tenant;

public interface TenantService {

    public Tenant addTenant(Tenant tenant);

    public Long tenantCount();

    public void loadInitTenantDetails();

}
