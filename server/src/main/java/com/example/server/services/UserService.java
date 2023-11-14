package com.example.server.services;


import com.example.server.dto.LoginDto;
import com.example.server.dto.RegisterDto;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import com.example.server.responses.LoginResponse;
import com.example.server.responses.RegisterRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Object saveUser(RegisterDto data) {
        if(data == null) return null;
        Optional<User> userCheck = userRepository.findByEmail(data.getEmail());
        if(userCheck.isPresent()) {
            return "Email already exists";
        }
        String pass = data.getPassword();
        User newUser = userRepository.save(
                new User(
                        data.getAvatar(), data.getFirst_name(), data.getLast_name(), data.getMobile(), data.getSex(),
                        data.getCmnd(), data.getRole(), data.getAddress(), data.getEmail(), pass
                )
        );
        String token = "";
        return new RegisterRes(
                newUser.getAvatar(), newUser.getFirst_name(), newUser.getLast_name(), newUser.getMobile(),
                newUser.getSex(), newUser.getCmnd(), newUser.getRole(), newUser.getAddress(),
                newUser.getEmail(), token
        );
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
        String token = "";
        return new LoginResponse(
                foundUser.getId(), foundUser.getAvatar(), foundUser.getFirst_name(), foundUser.getLast_name(), foundUser.getMobile(),
                foundUser.getSex(), foundUser.getCmnd(), foundUser.getRole(), foundUser.getAddress(), token
        );
    }
}
