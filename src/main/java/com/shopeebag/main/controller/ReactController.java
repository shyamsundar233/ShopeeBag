package com.shopeebag.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/sb")
public class ReactController {

    @RequestMapping(value = {
            ""
    })
    public String index() {
        return "forward:/index.html";
    }

}
