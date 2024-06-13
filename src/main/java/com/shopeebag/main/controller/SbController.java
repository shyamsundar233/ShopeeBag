package com.shopeebag.main.controller;

import com.shopeebag.main.entity.SbUser;
import com.shopeebag.main.service.sbUser.SbUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SbController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SbController.class);

    @Autowired
    private SbUserService sbUserService;

    @RequestMapping("/")
    public String index() {
        return "redirect:/sb";
    }

    @GetMapping("/login")
    public String login() {
        return "login/login-page";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute SbUser user) {
        sbUserService.saveUser(user);
        return "redirect:/login";
    }

}
