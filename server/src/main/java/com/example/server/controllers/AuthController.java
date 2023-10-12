package com.example.server.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody String data) {
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody String data) {
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody String data) {
        return null;
    }
}
