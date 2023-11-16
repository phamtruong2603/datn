package com.example.server.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsServiceCustom {
    UserDetails loadUserById(int id) throws UsernameNotFoundException;
}
