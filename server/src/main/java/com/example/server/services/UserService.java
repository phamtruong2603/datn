package com.example.server.services;


import com.example.server.dto.LoginDto;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(User user) {
       return userRepository.save(user);
    }

    public Object findUser(LoginDto data) {
        Optional<User> user = userRepository.findByEmail(data.getEmail());
        if (user.isEmpty()){
            return "Email does not exist";
        }
        User foundUser = user.get();
        if (!foundUser.getPassword().equals(data.getPassword())){
            return "Check your password again";
        }
        return foundUser;
    }
}
