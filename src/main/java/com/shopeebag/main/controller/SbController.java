package com.shopeebag.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SbController {

    @RequestMapping("/")
    public String index() {
        return "redirect:/sb";
    }

}
