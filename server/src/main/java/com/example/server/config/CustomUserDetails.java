package com.example.server.config;

import com.example.server.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomUserDetails implements UserDetails {

    private int id;
    private String email;
    private String password;
    private String avatar;
    private String first_name;
    private String last_name;
    private String mobile;
    private String sex;
    private String cmnd;
    private String address;

    private Collection<? extends GrantedAuthority> role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role;
    }

    public static CustomUserDetails convertToUserDetails(User user) {
        CustomUserDetails customUserDetails = new CustomUserDetails(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getAvatar(),
                user.getFirst_name(),
                user.getLast_name(),
                user.getMobile(),
                user.getSex(),
                user.getCmnd(),
                user.getAddress(),
                Arrays.asList(new SimpleGrantedAuthority(user.getRole()))
        );
        return customUserDetails;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
