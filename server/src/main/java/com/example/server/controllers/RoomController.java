package com.example.server.controllers;

import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.responses.Response;
import com.example.server.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/room")
public class RoomController {

    @Autowired
    RoomService roomService;

    @PostMapping("/create-room")
    public ResponseEntity<Response> createRoom(@RequestBody Room room) {
        try {
            Room saveRoom = roomService.createRoom(room);
            if (saveRoom == null){
                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                        new Response("409", "The room already exists", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    new Response("201", "success", 1000, saveRoom)
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }
}
