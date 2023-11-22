package com.example.server.controllers;

import com.example.server.dto.BillDto;
import com.example.server.responses.Response;
import com.example.server.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/bill")
@CrossOrigin(origins = "*")
public class BillController {

    @Autowired
    private BillService billService;

    @PostMapping("create-bill")
    public ResponseEntity<Response> CreateBill(@RequestBody BillDto res) {

        Object billSave = billService.saveBill(res);

        String status = "200";
        String message = "success";

        return ResponseEntity.status(HttpStatus.CREATED).body(
                new Response(status, message, 1000, "")
        );
    }
}
