package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "rooms")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private boolean status;

    @Column(name = "price")
    private float price;

    @Column(name = "max_user")
    private  int max_user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id")
    @JsonIgnore
    private Hotel hotel;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "room", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<User> users;

    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "room_device",
            joinColumns = @JoinColumn(name = "room_id"),
            inverseJoinColumns = @JoinColumn(name = "device_id")
    )
    private List<Device> devices;
}