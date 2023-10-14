package com.example.server.controllers;

import com.example.server.entity.User;
import com.example.server.responses.Response;
import com.example.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User request) {

        try {
            User userSave = userService.saveUser(request);
            if(userSave == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new Response("404", "not found", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new Response("200", "success", 1000, userSave)
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new Response("401", "fail", 1001, "")
            );
        }
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
