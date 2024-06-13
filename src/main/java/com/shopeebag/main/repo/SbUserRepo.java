package com.shopeebag.main.repo;

import com.shopeebag.main.entity.SbUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SbUserRepo extends JpaRepository<SbUser, Long> {

    SbUser findByUsername(String username);

}
