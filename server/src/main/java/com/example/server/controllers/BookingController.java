package com.example.server.controllers;

import com.example.server.dto.BookingDeleteDto;
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
        System.out.println(id);
        Object saveBooking = bookingService.confirmBooking(id);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }

    @PostMapping("delete-booking")
    public ResponseEntity<Response> deleteBooking(@RequestBody BookingDeleteDto data) {

        System.out.println(data);
        Object saveBooking = bookingService.deleteBooking(data);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }

    @GetMapping("get-all")
    public ResponseEntity<Response> getAllBooking() {

        Object saveBooking = bookingService.getAllBooking();
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }

    @GetMapping("get-booking-by-email")
    public ResponseEntity<Response> getBookingByEmail(@RequestParam String email) {

        Object saveBooking = bookingService.getBookingByEmail(email);
        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, saveBooking)
        );
    }
}
