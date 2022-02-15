package com.benporayko.personalsite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    
    @GetMapping(value = "{_:^(?!index\\.html|api).*$}")
    public String index() {
        return "index";
    }
}
