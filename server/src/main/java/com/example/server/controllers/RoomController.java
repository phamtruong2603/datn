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
            if (saveRoom == null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                        new Response("409", "The room already exists", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    new Response("201", "success", 1000, saveRoom)
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }

    @GetMapping("/get-all")
    public ResponseEntity<Response> getAllRoom() {
        Object rooms = roomService.getAllRoom();
        String message = "success";
        String status = "200";
        if (rooms == null) {
            message = "not fount";
            status = "404";
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                new Response(status, message, 1001, rooms)
        );
    }

    @GetMapping("/get-all-room-by-hotel")

    public ResponseEntity<Response> getRoomByHotel(@RequestParam int hotel_id) {
        System.out.println(hotel_id);
        Object rooms = roomService.getRoomByHotel(hotel_id);
        String message = "success";
        String status = "200";
        System.out.println(rooms);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                new Response(status, message, 1001, "")
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
