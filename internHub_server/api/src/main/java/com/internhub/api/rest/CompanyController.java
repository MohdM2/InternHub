package com.internhub.api.rest;

import com.internhub.api.entity.Company;
import com.internhub.api.request.SignupRequest;
import com.internhub.api.response.Response;
import com.internhub.api.service.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/companies")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCompany(@PathVariable int id) {
        Response response = companyService.getCompanyById(id);
        return ResponseEntity.ok(response);
    }
    @PostMapping
    public ResponseEntity<?> createCompany(@RequestBody SignupRequest request) {
         Response response = companyService.saveCompany(request);
         return ResponseEntity.ok(response);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCompany(@RequestPart(required = false) MultipartFile logoFile, @ModelAttribute Company company, @PathVariable int id) {
        company.setId(id);
        Response response = companyService.updateCompany(company, logoFile);
        return ResponseEntity.ok(response);
    }
}
