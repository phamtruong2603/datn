package com.example.server.controllers;

import com.example.server.dto.HotelRequestCreate;
import com.example.server.entity.Hotel;
import com.example.server.responses.Response;
import com.example.server.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hotel")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping("/create-hotel")
    public ResponseEntity<Response> createHotel(@RequestBody HotelRequestCreate data){
        System.out.println(data);
        try {
            if(data.getName() == null || data.getAddress() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new Response("400", "Missing name or address in the request", 1001, "")
                );
            }
            Hotel saveHotel = hotelService.createHotel(data);
            if (saveHotel == null){
                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                        new Response("409", "The hotel already exists", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    new Response("201", "success", 1000, saveHotel)
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }

    @GetMapping("/get-all-hotel")
    public ResponseEntity<Response> getAllHotel() {
        try {
            List<Hotel> hotels = hotelService.getAllHotel();
            return ResponseEntity.status(HttpStatus.OK).body(
                    new Response("201", "success", 1000, hotels)
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }

    @GetMapping("/get-hotel/{id}")
    public ResponseEntity<Response> getHotelById(@PathVariable Integer id) {
        try {
            Hotel hotel = hotelService.getHotelById(id);
            if (hotel == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new Response("404", "not found", 1001, "")
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new Response("201", "success", 1000, hotel)
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new Response("500", "fail", 1001, "")
            );
        }
    }
}
