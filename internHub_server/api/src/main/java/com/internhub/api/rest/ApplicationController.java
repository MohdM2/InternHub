package com.internhub.api.rest;

import com.internhub.api.entity.Application;
import com.internhub.api.response.Response;
import com.internhub.api.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping
    public ResponseEntity<?> saveApplication(@RequestBody Application application) {
        return ResponseEntity.ok(applicationService.saveApplication(application));
    }

    @PutMapping("/accept/{id}")
    public ResponseEntity<?> acceptApplication(@PathVariable int id) {
        return ResponseEntity.ok(applicationService.acceptApplication(id));
    }

    @PutMapping("/reject/{id}")
    public ResponseEntity<?> rejectApplication(@PathVariable int id) {
        return ResponseEntity.ok(applicationService.rejectApplication(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteApplication(@PathVariable int id) {
        return ResponseEntity.ok(applicationService.deleteApplication(id));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<?> getApplicationsByStudentId(@PathVariable int studentId) {
        return ResponseEntity.ok(applicationService.getApplicationsByStudentId(studentId));
    }

    @GetMapping("/job/{jobId}")
    public ResponseEntity<?> getApplicationsByJobId(@PathVariable int jobId) {
        return ResponseEntity.ok(applicationService.getApplicationsByJobId(jobId));
    }
}
