package com.internhub.api.rest;

import com.internhub.api.entity.Student;
import com.internhub.api.request.SignupRequest;
import com.internhub.api.response.Response;
import com.internhub.api.service.StudentService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/students")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable int id) {
        Response response = studentService.getStudentById(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<?> createStudent(@RequestBody SignupRequest request) {
        Response response = studentService.saveStudent(request);
        return ResponseEntity.ok(response);
    }

    @PutMapping
    public ResponseEntity<?> updateStudent(@RequestPart MultipartFile cvFile, @ModelAttribute @DateTimeFormat(pattern = "dd/MM/yyyy") Student student) {
        Response response = studentService.updateStudent(student, cvFile);
        return ResponseEntity.ok(response);
    }
}
