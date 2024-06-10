package com.shopeebag.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SbController {

    @GetMapping("/")
    public String index() {
        return "Hello World";
    }

}
