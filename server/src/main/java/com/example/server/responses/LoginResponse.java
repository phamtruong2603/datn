package com.example.server.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private int id;
    private String avatar;
    private String first_name;
    private String last_name;
    private String mobile;
    private String sex;
    private String cmnd;
    private String email;
    private String role;
    private String address;
    private String token;
}
