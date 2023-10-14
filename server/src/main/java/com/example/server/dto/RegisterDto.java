package com.example.server.dto;

import lombok.Data;

@Data
public class RegisterDto {
    private int id;
    private String avatar;
    private String full_name;
    private String mobile;
    private String sex;
    private String CMND;
    private String role;
    private String address;
    private String password;
}
