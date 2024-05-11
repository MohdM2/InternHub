package com.internhub.api.dao;

import com.internhub.api.entity.Course;

import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class CourseDAO {

    private EntityManager entityManager;

    public CourseDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void saveCourse(Course course) {
        entityManager.persist(course);
    }

    public Course getCourseById(int id) {
        return entityManager.find(Course.class, id);
    }

    public void updateCourse(Course course) {
        entityManager.merge(course);
    }

    public void deleteCourse(int id) {
        Course course = entityManager.find(Course.class, id);
        if (course != null) {
            entityManager.remove(course);
        }
    }
}
