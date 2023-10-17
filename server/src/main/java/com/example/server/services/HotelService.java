package com.example.server.services;

import com.example.server.entity.Hotel;
import com.example.server.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public Hotel createHotel(Hotel data) {
        Optional<Hotel> findHotel = hotelRepository.findByNameAndAddress(data.getName(), data.getAddress());
        if (findHotel.isPresent()) return null;
        return hotelRepository.save(data);
    }

    public List<Hotel> getAllHotel() {
        return hotelRepository.findAll();
    }

    public Hotel getHotelById(Integer id) {
        Optional<Hotel> hotel = hotelRepository.findById(id);
        return hotel.orElse(null);
    }
}
