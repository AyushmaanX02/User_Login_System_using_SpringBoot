package com.javaproject.userloginbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserLoginBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserLoginBackendApplication.class, args);
        System.out.println("🚀 User Login Backend is running...");
    }
}
