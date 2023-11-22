package com.example.server.dto;

import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillDto {
    private String name;
    private float price;
    private int room_id;
    private int hotel_id;
    private int booking_id;
}
