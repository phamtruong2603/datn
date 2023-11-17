package com.example.server.util;
import com.example.server.config.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;

@Component
@Slf4j
public class JwtUtil {

    @Value("${ra.jwt.SECRET}")
    private String JWT_SECRET;

    @Value("${ra.jwt.EXPIRATION}")
    private String JWT_EXPIRATION;

    // Tạo ra jwt từ thông tin id user
    public String generateToken(CustomUserDetails userDetails) {
        Instant instant = Instant.now().plusMillis(Long.parseLong(JWT_EXPIRATION));
        Date expirationDate = Date.from(instant);
        return Jwts.builder()
                .setSubject(String.valueOf(userDetails.getEmail()))
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    // Lấy thông tin user từ jwt
    public String getUserEmailFromJWT(String token) {
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET)
                .parseClaimsJws(token).getBody();

        //
        return claims.getSubject();
    }

    //validate thong tin token
    public Boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET)
                    .parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
}