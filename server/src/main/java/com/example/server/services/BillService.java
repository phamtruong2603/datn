package com.example.server.services;

import com.example.server.dto.BillDto;
import com.example.server.entity.Bill;
import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;


    public Object saveBill(BillDto res) {

        Optional<Hotel> hotel = hotelRepository.findById(res.getHotel_id());
        Optional<Room> room = roomRepository.findById(res.getRoom_id());
        Optional<Booking> booking = bookingRepository.findById(res.getBooking_id());

        Bill bill =new Bill();
        bill.setName(res.getName());
        billRepository.save(bill);

        return null;
    }

}
