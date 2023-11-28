package com.example.server.repository;

import com.example.server.dto.BillDto;
import com.example.server.entity.Bill;
import com.example.server.entity.Booking;
import com.example.server.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
    Optional<Bill> findByBookingContaining(Booking booking);
}
