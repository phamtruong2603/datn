package com.example.server.dto;

import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto {
    private String name;
    private String description;
    private String discount;
    private String received_date;
    private String pay_day;
    private boolean idDelete;
    private String verification;
    private int count_user;
    private boolean status;
    private int room_id;
    private int hotel_id;
    private List<RegisterDto> users;
}
