package com.internhub.api.Rest;

import com.internhub.api.dao.UserDao;
import com.internhub.api.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserDao dao;

    public UserController(UserDao dao) {
        this.dao = dao;
    }

    @GetMapping("/users")
    public ResponseEntity<?> login(@RequestBody User user) {
        User foundUser = dao.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser == null)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email/password");
        return ResponseEntity.ok(foundUser);
    }

    @PostMapping("/users")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (user.getEmail() == null || user.getType() == null || user.getPassword() == null)
            return ResponseEntity.badRequest().body("You must provide all fields");
        if (dao.getUserByEmail(user.getEmail()) != null)
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        dao.saveUser(user);
        return ResponseEntity.ok("Sign up successful");
    }
}
