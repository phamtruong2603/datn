package com.example.server.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomResponse {
    private int id;
    private String name;
    private String description;
    private boolean status;
    private float price;
    private int max_user;
    private int hotel_id;
}
