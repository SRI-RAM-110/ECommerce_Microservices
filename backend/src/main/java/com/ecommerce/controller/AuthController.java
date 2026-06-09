package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.dto.LoginRequest;
import com.ecommerce.entity.RegisterEntity;
import com.ecommerce.service.AuthService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    AuthService service;

    @PostMapping("/register")
    public String registerUser(
    		@Valid @RequestBody RegisterEntity req) {

        return service.userRegister(req);
    }

    @PostMapping("/login")
    public String loginUser(
            @RequestBody LoginRequest req) {

        return service.userLogin(
                req.getEmail(),
                req.getPassword()
        );
    }
}