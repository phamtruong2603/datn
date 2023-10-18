package com.example.server.dto;

import com.example.server.entity.Hotel;
import lombok.Data;

@Data
public class RoomRequestCreate {
    private String name;
    private String description;
    private boolean status;
    private float price;
    private  int max_user;
    private int hotel_id;
}
