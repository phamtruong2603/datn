package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "devices")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Device {

    @Id
    @GeneratedValue()
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "devices")
    @JsonIgnore
    private List<Room> rooms;
}
