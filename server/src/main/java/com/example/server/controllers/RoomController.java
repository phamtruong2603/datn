package com.example.server.controllers;

import com.example.server.dto.RoomRequestCreate;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.responses.Response;
import com.example.server.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/room")
@CrossOrigin(origins = "*")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/create-room")
    public ResponseEntity<Response> createRoom(@RequestBody RoomRequestCreate data) {
        try {
            System.out.println(data);
            if (data.getName() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new Response("400", "The room already exists", 1001, "")
                );
            }
            Room saveRoom = roomService.createRoom(data);
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

    @GetMapping("/room/{hotel_id}")
    public ResponseEntity<Response> getAllRoomByHotel (@Param(value = "hotel_id") int id) {
        Object room = roomService.getAllRoomByHotel(id);
        String message = "success";
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                new Response("500", message, 1001, room)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getRoomById(@PathVariable Integer id) {
        try {
            Room room = roomService.getRoomById(id);
            if (room == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new Response("404", "not found", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new Response("201", "success", 1000, room)
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }
}
