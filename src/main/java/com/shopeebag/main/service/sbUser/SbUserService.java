package com.shopeebag.main.service.sbUser;

import com.shopeebag.main.entity.SbUser;

public interface SbUserService {

    public void saveUser(SbUser sbUser);

    public void loadInitUserDetails(String source);

    public SbUser getUserByUsername(String username);

}
