package com.example.server.repository;

import com.example.server.entity.Booking;
import com.example.server.entity.Hotel;
import com.example.server.entity.Room;
import com.example.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findRoomsByHotelId(int hotelId);

    List<Room> findRoomsByHotel(Hotel h);

    Object findByNameLike(String nameWithWildcard);

    @Query(
            value = "select * from rooms where category=?1 and name like %?2%",
            nativeQuery = true
    )
    List<Room> findByCategoryAndName(String category, String name);

    @Query(
            value = "select * from rooms where name like %?1%",
            nativeQuery = true
    )
    List<Room> findByName(String name);

    List<Room> findByCategory(String category);

}
