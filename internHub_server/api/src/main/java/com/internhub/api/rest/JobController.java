package com.internhub.api.rest;

import com.internhub.api.entity.Job;
import com.internhub.api.response.DataResponse;
import com.internhub.api.response.Response;
import com.internhub.api.service.JobService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.Data;
import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping
    public ResponseEntity<?> createJob(@RequestBody Job job) {
        return ResponseEntity.ok(jobService.saveJob(job));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getJobById(@PathVariable int id) {
        DataResponse response = (DataResponse) jobService.findJobById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<?> getAllJobs() {
        DataResponse response = (DataResponse) jobService.findAllJobs();
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateJob(@PathVariable int id, @RequestBody Job job) {
        DataResponse response = (DataResponse) jobService.findJobById(id);
        if (response.getData() != null) {
            job.setId(id);
            jobService.updateJob(job);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable int id) {
        DataResponse response = (DataResponse) jobService.deleteJob(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<?> getJobsByCompanyId(@PathVariable int companyId) {
        return ResponseEntity.ok(jobService.findJobsByCompanyId(companyId));
    }
}
