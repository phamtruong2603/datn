package com.example.server.dto;

import lombok.Data;

@Data
public class HotelRequestCreate {
    private String name;
    private float star;
    private String description;
    private  String address;
}
