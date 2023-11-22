package com.example.server.services;

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

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
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
                booking.setHotel(hotel.get());
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
            Booking booking = findBooking.get();
            booking.setStatus(true);
            System.out.println(booking.getUsers().get(0).getEmail());
            emailSenderService.sendEmail(booking.getUsers().get(0).getEmail());
            return bookingRepository.save(booking);
        }

        return null;
    }
}
