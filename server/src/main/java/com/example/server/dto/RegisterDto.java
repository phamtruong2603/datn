package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {
    private String avatar;
    private String first_name;
    private String last_name;
    private String mobile;
    private String sex;
    private String cmnd;
    private String role;
    private String address;
    private String email;
    private String password;
}
