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

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "sex")
    private String sex;

    @Column(name = "cmnd")
    private String cmnd;

    @Column(name = "role")
    private String role;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

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

    public User(String avatar, String first_name, String last_name, String mobile, String sex, String cmnd, String role, String address, String email, String password) {
        this.avatar = avatar;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile = mobile;
        this.sex = sex;
        this.cmnd = cmnd;
        this.role = role;
        this.address = address;
        this.email = email;
        this.password = password;

    }
}
