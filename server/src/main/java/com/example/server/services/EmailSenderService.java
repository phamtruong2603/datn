package com.example.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSenderImpl sender;

    public void sendEmail(String email) {
        //send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Welcome to our system!");
        message.setText("Bạn đã đặt phòng thành công: \n" +
                "Email: " + email);
        sender.send(message);
    }
}