package com.example.server.services;

import com.example.server.dto.BillDto;
import com.example.server.entity.Bill;
import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.repository.*;
import com.example.server.responses.BillRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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
        Optional<Booking> booking = bookingRepository.findById(res.getBooking_id());
        Bill bill =new Bill();
        bill.setName(res.getName());
        hotel.ifPresent(bill::setHotel);
        if (booking.isPresent()) {
            bill.setBooking(booking.get());

            return billRepository.save(bill);
        }
        return null;
    }

    public Object getAll() {
        List<Bill> bills = billRepository.findAll();
        Optional<Hotel> hotel = hotelRepository.findById(1);
        List<BillRes> billRess = new ArrayList<>();
        for (Bill bill: bills) {
            BillRes billRes = new BillRes();
            billRes.setName(bill.getName());
            billRes.setBooking(bill.getBooking());
            billRes.setHotel(hotel.get());
            billRes.setRoom(bill.getBooking().getRoom());

            billRess.add(billRes);
        }
        return billRess;
    }

}
