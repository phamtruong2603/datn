package com.example.server.repository;


import com.example.server.entity.Booking;
import com.example.server.entity.Room;
import com.example.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
    List<Booking> findByRoom_id(int id);

    List<Booking> findByUsersContaining(User user);

    Optional<Booking> findByRoomContaining(Room room);
}
