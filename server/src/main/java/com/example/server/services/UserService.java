package com.example.server.services;


import com.example.server.dto.LoginDto;
import com.example.server.dto.RegisterDto;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import com.example.server.responses.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(RegisterDto data) {
        if(data == null) return null;
        String pass = data.getPassword();
        return new User(
                data.getAvatar(), data.getFull_name(), data.getMobile(), data.getSex(),
                data.getCMND(), data.getRole(), data.getAddress(), data.getEmail(), pass
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
                foundUser.getId(), foundUser.getAvatar(), foundUser.getFull_name(), foundUser.getMobile(),
                foundUser.getSex(), foundUser.getCMND(), foundUser.getRole(), foundUser.getAddress(), token
        );
    }
}
