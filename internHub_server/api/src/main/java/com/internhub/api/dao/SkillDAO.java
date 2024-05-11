package com.internhub.api.dao;

import com.internhub.api.entity.Skill;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SkillDAO {
    private EntityManager entityManager;

    public SkillDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Skill> getAllSkills() {
        return entityManager.createQuery("SELECT s FROM Skill s", Skill.class)
                .getResultList();
    }
}
