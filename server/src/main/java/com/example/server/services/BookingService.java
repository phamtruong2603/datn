package com.example.server.services;

import com.example.server.dto.BookingDeleteDto;
import com.example.server.dto.BookingDto;
import com.example.server.dto.RegisterDto;
import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.entity.User;
import com.example.server.repository.BookingRepository;
import com.example.server.repository.HotelRepository;
import com.example.server.repository.RoomRepository;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailSenderService emailSenderService;

    public Object saveBooking(BookingDto req) {

        try {
            Optional<Hotel> hotel = hotelRepository.findById(req.getHotel_id());
            Optional<Room> room = roomRepository.findById(req.getRoom_id());

            List<String> emails = req.getUsers().stream().map(RegisterDto::getEmail).collect(Collectors.toList());
            List<RegisterDto> userReq = req.getUsers();
            Optional<User> user = userRepository.findByEmail(emails.get(0));

            if (hotel.isPresent() && room.isPresent()) {
                Booking booking = new Booking();
                booking.setName(req.getName());
                booking.setDescription(req.getDescription());
                booking.setDiscount(req.getDiscount());
                booking.setReceived_date(req.getReceived_date());
                booking.setPay_day(req.getPay_day());
                booking.setCount_user(req.getCount_user());
                booking.setStatus(req.isStatus());
                booking.setRoom(room.get());
                booking.setIdDelete(req.isIdDelete());
                booking.setVerification(req.getVerification());
                if (user.isPresent()) {
                    booking.setUsers(Arrays.asList(user.get()));
                    return bookingRepository.save(booking);
                } else {
                    String encodedPassword = passwordEncoder.encode(userReq.get(0).getPassword());
                    User newUser = userRepository.save(
                            new User(
                                    userReq.get(0).getAvatar(), userReq.get(0).getFirst_name(), userReq.get(0).getLast_name(), userReq.get(0).getMobile(), userReq.get(0).getSex(),
                                    userReq.get(0).getCmnd(), userReq.get(0).getRole(), userReq.get(0).getAddress(), userReq.get(0).getEmail(), encodedPassword
                            )
                    );
                    booking.setUsers(Arrays.asList(newUser));

                    return bookingRepository.save(booking);
                }
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public Object confirmBooking(int id) {
        Optional<Booking> findBooking = bookingRepository.findById(id);

        if (findBooking.isPresent()) {

            String verification = RandomStringExample();
            Booking booking = findBooking.get();
            booking.setStatus(true);
            booking.setVerification(verification);

            Booking fountBooking = bookingRepository.save(booking);
            emailSenderService.sendEmail(booking.getUsers().get(0).getEmail(), verification);
            return fountBooking;
        }

        return null;
    }

    public Object deleteBooking(BookingDeleteDto data) {
        Optional<Booking> findBooking = bookingRepository.findById(data.getId());
        if (findBooking.isPresent()) {
            Booking booking = findBooking.get();
            if (Objects.equals(booking.getVerification(), data.getVerification())) {
                booking.setIdDelete(true);
                return bookingRepository.save(booking);
            }
        }
        return null;
    }

    public Object getBookingByEmail() {
        return null;
    }

    public Object getAllBooking() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings;
    }

    private String RandomStringExample() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        int length = 5;

        Random random = new Random();
        StringBuilder randomString = new StringBuilder();

        for (int i = 0; i < length; i++) {
            char randomChar = characters.charAt(random.nextInt(characters.length()));
            randomString.append(randomChar);
        }
        return randomString.toString();
    };

}
