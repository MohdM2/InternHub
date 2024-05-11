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
public class StudentDAO {

    private final EntityManager entityManager;

    @Autowired
    public StudentDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void saveStudent(Student student) {
        entityManager.persist(student);
    }

    public Student getStudentById(int id) {
        Student student = entityManager.find(Student.class, id);
        return student;
    }

    public Student getStudentByUserId(int userId) {
        TypedQuery<Student> query = entityManager.createQuery("SELECT s FROM Student s WHERE s.userId = :userId", Student.class);
        query.setParameter("userId", userId);
        try {
            Student student = query.getSingleResult();
            return student;
        } catch (NoResultException e) {
            return null;
        }
    }

    public void updateStudent(Student student) {
        System.out.println(student);
        entityManager.merge(student);
    }

    public void deleteCompany(int id) {
        Student student = getStudentById(id);
        if (student != null) {
            entityManager.remove(student);
        }
    }
}
