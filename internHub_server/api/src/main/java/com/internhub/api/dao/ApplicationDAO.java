package com.internhub.api.dao;

import com.internhub.api.entity.Application;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public class ApplicationDAO {

    private EntityManager entityManager;

    public ApplicationDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public Application getApplicationById(int id) {
        return entityManager.find(Application.class, id);
    }

    public void saveApplication(Application application) {
        entityManager.persist(application);
    }

    public List<Application> getApplicationsByStudentId(int studentId) {
        return entityManager.createQuery("SELECT a FROM Application a WHERE a.student.id = :studentId", Application.class)
                .setParameter("studentId", studentId)
                .getResultList();
    }

    public List<Application> getApplicationsByJobId(int jobId) {
        return entityManager.createQuery("SELECT a FROM Application a WHERE a.job.id = :jobId", Application.class)
                .setParameter("jobId", jobId)
                .getResultList();
    }

    public void updateApplication(Application application) {
        entityManager.merge(application);
    }

    public void deleteApplication(int id) {
        Application application = entityManager.find(Application.class, id);
        if (application != null) {
            entityManager.remove(application);
        }
    }
}
