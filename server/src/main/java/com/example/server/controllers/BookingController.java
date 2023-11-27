package com.example.server.controllers;

import com.example.server.dto.BookingDto;
import com.example.server.responses.Response;
import com.example.server.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin(origins = "*")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping("create-booking")
    public ResponseEntity<Response> createBooking(@RequestBody BookingDto req) {

        Object saveBooking = bookingService.saveBooking(req);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }

    @GetMapping("confirm-booking")
    public ResponseEntity<Response> confirmBooking(@RequestParam int id) {

        Object saveBooking = bookingService.confirmBooking(id);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }

    @GetMapping("get-all")
    public ResponseEntity<Response> getAllBooking(@RequestParam int room_id) {

        Object saveBooking = bookingService.getAllBooking(room_id);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }
}
