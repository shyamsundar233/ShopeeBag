package com.shopeebag.main;

import com.shopeebag.main.service.multiTenant.TenantService;
import com.shopeebag.main.service.role.RoleService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShopeeBagApplication {

	@Autowired
	private TenantService tenantService;

	@Autowired
	private RoleService roleService;

	public static void main(String[] args) {
		SpringApplication.run(ShopeeBagApplication.class, args);
	}

	@PostConstruct
	public void init() {
		tenantService.loadInitTenantDetails();
		roleService.addCustomerRole();
	}

}
