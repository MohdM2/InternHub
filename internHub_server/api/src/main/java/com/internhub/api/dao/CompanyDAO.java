package com.internhub.api.dao;

import com.internhub.api.entity.Company;
import com.internhub.api.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class CompanyDAO {

    private final EntityManager entityManager;

    @Autowired
    public CompanyDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void saveCompany(Company company) {
        entityManager.persist(company);
    }

    public Company getCompanyById(int id) {
        Company company = entityManager.find(Company.class, id);
//        company.setUser(null);
        return company;
    }

    public Company getCompanyByUserId(int userId) {
        TypedQuery<Company> query = entityManager.createQuery("SELECT c FROM Company c WHERE c.userId = :userId", Company.class);
        query.setParameter("userId", userId);
        try {
            Company company = query.getSingleResult();
//            company.setUser(null);
            return company;
        } catch (NoResultException e) {
            return null;
        }
    }

    public void updateCompany(Company company) {
        System.out.println(company);
        entityManager.merge(company);
    }

    public void deleteCompany(int id) {
        Company company = getCompanyById(id);
        if (company != null) {
            entityManager.remove(company);
        }
    }
}
