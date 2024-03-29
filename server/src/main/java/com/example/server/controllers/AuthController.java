package com.example.server.controllers;

import com.example.server.dto.LoginDto;
import com.example.server.dto.RegisterDto;
import com.example.server.responses.Response;
import com.example.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Response> register(@RequestBody RegisterDto request) {
        try {
            Object userSave = userService.saveUser(request);
            if("Email already exists".equals(userSave)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new Response("404", ""+userSave, 1001, "")
                );
            }
            if(userSave == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new Response("400", "Unable to create account", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    new Response("201", "success", 1000, userSave)
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "failllll", 1001, "")
            );
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody LoginDto data) {
        System.out.println(data);
        try {
            Object findUser = userService.findUser(data);
            if("Email does not exist".equals(findUser)){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new Response("404", ""+findUser, 1001, "")
                );
            } else if ("Check your password again".equals(findUser)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new Response("400", ""+findUser, 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new Response("200", "", 1000, findUser)
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "failllll", 1001, "")
            );
        }
    }

    @GetMapping("/verify-token")
    public ResponseEntity<Response> autoLogin(@RequestHeader(value = "Authorization") String token) {
        try {
            Object findUser = userService.findUserByToken(token);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new Response("200", "", 1000, findUser)
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "failllll", 1001, "")
            );
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody String data) {
        return null;
    }
}