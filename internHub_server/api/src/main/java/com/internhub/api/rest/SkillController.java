package com.internhub.api.rest;

import com.internhub.api.dao.SkillDAO;
import com.internhub.api.entity.Skill;
import com.internhub.api.response.DataResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/skills")
public class SkillController {
    private SkillDAO dao;

    public SkillController(SkillDAO dao) {
        this.dao = dao;
    }

    @GetMapping
    public ResponseEntity<?> getAllSkills() {
        List<Skill> skills =  dao.getAllSkills();
        return ResponseEntity.ok(new DataResponse(skills));
    }
}
