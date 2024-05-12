package com.internhub.api.dao;

import com.internhub.api.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public class UserDAO {

    private final EntityManager entityManager;
    private final StudentDAO studentDAO;
    private final CompanyDAO companyDAO;

    public UserDAO(EntityManager entityManager, StudentDAO studentDAO, CompanyDAO companyDAO) {
        this.entityManager = entityManager;
        this.studentDAO = studentDAO;
        this.companyDAO = companyDAO;
    }

    public void saveUser(User user) {
        entityManager.persist(user);
    }

    public User getUserById(int userId) {
        return entityManager.find(User.class, userId);
    }

    public User getUserByEmailAndPassword(String email, String password) {
        try {
            return entityManager.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password", User.class)
                    .setParameter("email", email)
                    .setParameter("password", password)
                    .getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public User getUserByEmail(String email) {
        try {
            TypedQuery<User> query = entityManager.createQuery("SELECT u FROM User u WHERE u.email = :email", User.class)
                    .setParameter("email", email);
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public void updateUser(User user) {
        entityManager.merge(user);
    }

    public void deleteUser(int userId) {
        User user = entityManager.find(User.class, userId);
        if (user != null) {
            entityManager.remove(user);
        }
    }
    public Object getProfile(User user) {
        if (user.getType().equals("student"))
            return studentDAO.getStudentByUserId(user.getId());
        else
            return companyDAO.getCompanyByUserId(user.getId());
    }
}
