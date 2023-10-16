package com.example.server.services;

import com.example.server.entity.Room;
import com.example.server.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    @Autowired
    RoomRepository roomRepository;

    public Room createRoom(Room data) {
//        Room room = roomRepository.findByName
        return roomRepository.save(data);
    }
}
