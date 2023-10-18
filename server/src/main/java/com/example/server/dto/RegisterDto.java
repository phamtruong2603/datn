package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {
    private String avatar;
    private String full_name;
    private String mobile;
    private String sex;
    private String CMND;
    private String role;
    private String address;
    private String email;
    private String password;
}
