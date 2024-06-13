package com.shopeebag.main.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/sb")
public class ReactController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ReactController.class);

    @RequestMapping(value = {
            ""
    })
    public String index(HttpServletRequest request) {
        LOGGER.info("Incoming URL: {}", request.getRequestURL().toString());
        return "forward:/index.html";
    }

}
