package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue()
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "rentalPeriod")
    private String rentalPeriod;

    @Column(name = "count_user")
    private int count_user;

    @Column(name = "status")
    private boolean status;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotle_id")
    @JsonIgnore
    private Hotel hotel;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "booking", fetch = FetchType.LAZY)
    private List<User> users;
}
