package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.entity.RegisterEntity;
import com.ecommerce.repository.RegisterRepo;

@Service
public class AuthService {

    @Autowired
    RegisterRepo repo;

    public String userRegister(RegisterEntity req) {

        RegisterEntity existingUser = repo.findByEmail(req.getEmail());

        if(existingUser != null) {
            return "Email Already Exists";
        }

        repo.save(req);

        return "Registered Successfully";
    }

    public String userLogin(String email, String password) {

        RegisterEntity user = repo.findByEmail(email);

        if(user == null) {
            return "User Not Found";
        }

        if(user.getPassword().equals(password)) {
            return "Login Successful";
        }

        return "Invalid Password";
    }
}