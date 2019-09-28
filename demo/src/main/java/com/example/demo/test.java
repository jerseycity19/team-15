package com.example.demo;

//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class test {
    @RequestMapping(value ="/something", method = RequestMethod.PUT)
    public String anything(@RequestParam int n){
        return n == 5 ? "Five" : "Other Number";


    }

}
