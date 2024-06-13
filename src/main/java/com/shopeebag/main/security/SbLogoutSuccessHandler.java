package com.shopeebag.main.security;

import com.shopeebag.main.service.sbUser.SbUserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class SbLogoutSuccessHandler implements LogoutSuccessHandler {

    @Autowired
    private SbUserService sbUserService;

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        sbUserService.loadInitUserDetails("logout");
        response.sendRedirect("/login");
    }
}
