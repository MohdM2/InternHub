package com.internhub.api.dao;

import com.internhub.api.entity.JobCategory;
import com.internhub.api.entity.Skill;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JobCategoryDAO {
    private EntityManager entityManager;

    public JobCategoryDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<JobCategory> getAllJobCategories() {
        return entityManager.createQuery("SELECT c FROM JobCategory c", JobCategory.class)
                .getResultList();
    }
}
