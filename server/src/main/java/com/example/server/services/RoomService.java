package com.example.server.services;

import com.example.server.dto.FindRoomDto;
import com.example.server.dto.RoomRequestCreate;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.repository.HotelRepository;
import com.example.server.repository.RoomRepository;
import com.example.server.responses.RoomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    public Object getAllRoom() {
        try {
            return roomRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    public Object getRoomByHotel(int hotel_id) {
        Optional<Hotel> hotel = hotelRepository.findById(hotel_id);

        if (hotel.isPresent()) {
            Hotel h = hotel.get();
            List<Room> listRoom = roomRepository.findRoomsByHotel(h);
            List<RoomResponse> responses = new ArrayList<>();
            for (Room room : listRoom) {
                RoomResponse response = new RoomResponse();
                response.setId(room.getId());
                response.setHotel_id(h.getId());
                response.setName(room.getName());
                response.setDescription(room.getDescription());
                response.setPrice(room.getPrice());
                response.setMax_user(room.getMax_user());
                response.setStatus(room.isStatus());
                responses.add(response);
            }
            return responses;
        }
        return null;
    }

    public Room getRoomById(int id) {

        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return null;
        }
        return room.get();
    }

    public Object findRoomsByPartialName(FindRoomDto data) {
        List<Room> rooms;
        if (data.getCategory() == null) {
            rooms = roomRepository.findByName(data.getName());
        }
        else if (data.getName() == null) {
            rooms = roomRepository.findByCategory(data.getCategory());
        }else  {
            rooms = roomRepository.findByCategoryAndName(data.getCategory(), data.getName());
        }
        return rooms;
    }
}
