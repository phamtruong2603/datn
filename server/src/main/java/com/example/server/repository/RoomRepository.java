package com.example.server.repository;

import com.example.server.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    Optional<Room> findByHotelId(int hotelId);
}
