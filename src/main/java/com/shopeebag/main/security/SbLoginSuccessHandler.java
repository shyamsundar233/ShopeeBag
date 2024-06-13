package com.shopeebag.main.security;

import com.shopeebag.main.service.sbUser.SbUserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class SbLoginSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private SbUserService sbUserService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        sbUserService.loadInitUserDetails("login");
        response.sendRedirect("/sb");
    }
}
