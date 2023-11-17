package com.example.server.services;


import com.example.server.config.CustomUserDetails;
import com.example.server.config.JwtAuthTokenFilter;
import com.example.server.dto.LoginDto;
import com.example.server.dto.RegisterDto;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import com.example.server.responses.LoginResponse;
import com.example.server.responses.RegisterRes;
import com.example.server.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    public Object saveUser(RegisterDto data) {
        if(data == null) return null;
        Optional<User> userCheck = userRepository.findByEmail(data.getEmail());
        if(userCheck.isPresent()) {
            return "Email already exists";
        }
        String encodedPassword = passwordEncoder.encode(data.getPassword());
        User newUser = userRepository.save(
                new User(
                        data.getAvatar(), data.getFirst_name(), data.getLast_name(), data.getMobile(), data.getSex(),
                        data.getCmnd(), data.getRole(), data.getAddress(), data.getEmail(), encodedPassword
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
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                data.getEmail(), data.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

        //tao token
        String token = jwtUtil.generateToken(customUserDetails);

        Optional<User> user = userRepository.findByEmail(data.getEmail());
        if (user.isEmpty()){
            return "Email does not exist";
        }
        User foundUser = user.get();
        return new LoginResponse(
                foundUser.getId(), foundUser.getAvatar(), foundUser.getFirst_name(), foundUser.getLast_name(), foundUser.getMobile(),
                foundUser.getSex(), foundUser.getCmnd(), foundUser.getRole(), foundUser.getAddress(), token
        );
    }

    public Object findUserByToken(String token) {
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        String email = jwtUtil.getUserEmailFromJWT(token);
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            User foundUser = user.get();
            return new LoginResponse(
                    foundUser.getId(), foundUser.getAvatar(), foundUser.getFirst_name(), foundUser.getLast_name(), foundUser.getMobile(),
                    foundUser.getSex(), foundUser.getCmnd(), foundUser.getRole(), foundUser.getAddress(), token
            );
        }
        return null;
    }
}
