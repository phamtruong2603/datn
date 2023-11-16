package com.example.server.config;

import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("not fount!!! not email");
        }
        return CustomUserDetails.convertToUserDetails(user.get());
    }

//    @Override
//    public UserDetails loadUserById(int id) throws UsernameNotFoundException {
//        Optional<User> user = userRepository.findById(id);
//        System.out.println(user);
//        if (user.isEmpty()) {
//            throw new UsernameNotFoundException("not fount!!!");
//        }
//        return CustomUserDetails.convertToUserDetails(user.get());
//    }

}
