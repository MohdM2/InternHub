package com.internhub.api.dao;

import com.internhub.api.entity.Job;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public class JobDAO {

    private EntityManager entityManager;

    public JobDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void save(Job job) {
        entityManager.persist(job);
    }

    public Job findById(int id) {
        return entityManager.find(Job.class, id);
    }

    public void update(Job job) {
        entityManager.merge(job);
    }

    public void delete(Job job) {
        entityManager.remove(job);
    }

    public List<Job> findByCompanyId(int companyId) {
        return entityManager.createQuery(
                        "SELECT j FROM Job j WHERE j.company.id = :companyId", Job.class)
                .setParameter("companyId", companyId)
                .getResultList();
    }

    public List<Job> findAll() {
        return entityManager.createQuery("SELECT j FROM Job j", Job.class)
                .getResultList();
    }
}
