package com.internhub.api.rest;

import com.internhub.api.dao.JobCategoryDAO;
import com.internhub.api.dao.SkillDAO;
import com.internhub.api.entity.JobCategory;
import com.internhub.api.entity.Skill;
import com.internhub.api.response.DataResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class JobCategoryController {
    private JobCategoryDAO dao;

    public JobCategoryController(JobCategoryDAO dao) {
        this.dao = dao;
    }

    @GetMapping
    public ResponseEntity<?> getAllJobCategories() {
        List<JobCategory> skills =  dao.getAllJobCategories();
        return ResponseEntity.ok(new DataResponse(skills));
    }
}
