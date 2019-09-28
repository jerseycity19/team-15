package com.example.demo;

//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class test {
    @RequestMapping(value ="/something", method = RequestMethod.PUT)
    public String something(@RequestParam int n){
        return n == 5 ? "Five" : "Other Number";


    }

    @RequestMapping(value ="/val1", method = RequestMethod.POST)
    public String val1(@RequestParam Person n){
        n.sendToSql();
        return n.user;
    }

}
