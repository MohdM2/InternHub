package com.internhub.api.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    @Column(name = "status")
    private String status;

    @Column(name = "submission_date")
    private Date submissionDate;

    @Column(name = "response_date")
    private Date responseDate;

    // Constructors, getters, and setters

    public Application() {
    }

    public Application(Student student, Job job, String status, Date submissionDate, Date responseDate) {
        this.student = student;
        this.job = job;
        this.status = status;
        this.submissionDate = submissionDate;
        this.responseDate = responseDate;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
        this.submissionDate = submissionDate;
    }

    public Date getResponseDate() {
        return responseDate;
    }

    public void setResponseDate(Date responseDate) {
        this.responseDate = responseDate;
    }
}
