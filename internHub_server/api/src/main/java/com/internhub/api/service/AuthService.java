package com.internhub.api.service;

import com.internhub.api.config.JwtService;
import com.internhub.api.dao.UserDAO;
import com.internhub.api.entity.User;
import com.internhub.api.request.LoginRequest;
import com.internhub.api.response.AuthResponseWithData;
import com.internhub.api.response.Response;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserDAO userDao;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserDAO dao, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userDao = dao;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public Response register(User user) {
        if (user.getEmail() == null || user.getType() == null || user.getPassword() == null)
            throw new IllegalArgumentException("You must provide all fields");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDao.saveUser(user);
        String jwt = jwtService.generateToken(user);
        return new AuthResponseWithData(jwt, user.getType(), user);
    }

    public Response authenticate(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        User user = userDao.getUserByEmail(request.getEmail());
        String jwt = jwtService.generateToken(user);
        Object data = userDao.getProfile(user);
        return new AuthResponseWithData(jwt, user.getType(), data);
    }
}
