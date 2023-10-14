package com.example.server.services;


import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(User user) {
        System.out.println("user: "+user);
       return userRepository.save(user);
    }
}
