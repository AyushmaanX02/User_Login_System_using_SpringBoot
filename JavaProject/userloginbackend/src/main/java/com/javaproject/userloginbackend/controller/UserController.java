package com.javaproject.userloginbackend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaproject.userloginbackend.entity.User;
import com.javaproject.userloginbackend.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        boolean valid = userService.loginUser(user.getUsername(), user.getPassword());
        if (valid)
            return ResponseEntity.ok("Login successful!");
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials!");
    }
}

