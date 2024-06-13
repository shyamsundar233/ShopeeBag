package com.shopeebag.main.service.multiTenant;

import com.shopeebag.main.entity.Tenant;

public interface TenantService {

    public Tenant addTenant(Tenant tenant);

    public Long tenantCount();

    public void loadInitTenantDetails();

    public Tenant getNextTenant();

    public void setTenantIsActive(Long tenantId);

}
