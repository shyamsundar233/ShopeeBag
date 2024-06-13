package com.shopeebag.main.dao.sbUser;

import com.shopeebag.main.entity.SbUser;

public interface SbUserDao {

    public void saveUser(SbUser sbUser);

    public SbUser getUserByUsername(String username);

}
