package com.example.server.services;

import com.example.server.dto.RoomRequestCreate;
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

    public Room createRoom(RoomRequestCreate data) {
        Optional<Hotel> hotel = hotelRepository.findById(data.getHotel_id());
        if (hotel.isPresent()) {
            Hotel foundHotel = hotel.get();
            Room room = new Room();
            room.setName(data.getName());
            room.setDescription(data.getDescription());
            room.setStatus(data.isStatus());
            room.setPrice(data.getPrice());
            room.setMax_user(data.getMax_user());
            room.setHotel(foundHotel);
            return roomRepository.save(room);
        } else {
            return null;
        }
    }

    public Object getAllRoomByHotel(int id) {
        return null;
    }

    public Room getRoomById(int id){

        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return null;
        }
        return room.get();
    }
}
