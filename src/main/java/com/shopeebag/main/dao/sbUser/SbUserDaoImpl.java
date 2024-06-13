package com.shopeebag.main.dao.sbUser;

import com.shopeebag.main.entity.SbUser;
import com.shopeebag.main.repo.SbUserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

@Repository
public class SbUserDaoImpl implements SbUserDao{

    private static final Logger LOGGER = LoggerFactory.getLogger(SbUserDaoImpl.class);

    @Autowired
    private SbUserRepo sbUserRepo;

    @Override
    public void saveUser(SbUser sbUser) {
        LOGGER.info("Saving user {}", sbUser);
        sbUser.setPassword(encryptPassword(sbUser.getPassword()));
        sbUserRepo.save(sbUser);
        LOGGER.info("User {} saved", sbUser);
    }

    private String encryptPassword(String password) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder.encode(password);
    }

}
