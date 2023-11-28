package com.example.server.responses;


import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillRes {
    private String name;
    private Room room;
    private Booking booking;
    private Hotel hotel;
}
