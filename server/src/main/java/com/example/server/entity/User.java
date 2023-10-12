package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue()
    @Column(name = "id")
    private int id;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "full_name")
    private String full_name;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "sex")
    private String sex;

    @Column(name = "CMND")
    private String CMND;

    @Column(name = "role")
    private String role;

    @Column(name = "address")
    private String address;

    @Column(name = "password")
    private String password;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bill_id")
    private Bill bill;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id")
    private Booking booking;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY)
    private List<Notification> notifications;
}
