package com.example.server.services;

import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.repository.HotelRepository;
import com.example.server.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private HotelRepository hotelRepository;

    public Room createRoom(Room data) {
        Optional<Hotel> hotel = hotelRepository.findById(data.getHotel().getId());
        if (hotel.isPresent()) {
//            Room room = new Room(
//                    data.getName(), data.getDescription(), data.isStatus(),
//                    data.getPrice(), data.getMax_user(), hotel.get()
//            );
            Room room = new Room();
            room.setName(data.getName());
            room.setDescription(data.getDescription());
            room.setStatus(data.isStatus());
            room.setPrice(data.getPrice());
            data.setMax_user(data.getMax_user());
            room.setHotel(hotel.get());
            return roomRepository.save(room);
        } else {
            return null;
        }
    }
}
