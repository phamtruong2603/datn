package com.example.server.util;

import com.example.server.responses.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;

@ControllerAdvice
public class Exception403 {
    @ExceptionHandler(value = AccessDeniedException.class)
    public ResponseEntity<Response> accessIsDenied(Exception e) {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(
                new Response("403", "abcbcbcbc", 1001, "")
        );
    }
}
