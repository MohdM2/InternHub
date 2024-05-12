package com.internhub.api.service;

import com.internhub.api.dao.ApplicationDAO;
import com.internhub.api.dao.JobDAO;
import com.internhub.api.dao.StudentDAO;
import com.internhub.api.entity.Application;
import com.internhub.api.response.DataResponse;
import com.internhub.api.response.Response;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ApplicationService {
    private final ApplicationDAO applicationDAO;
    private final JobDAO jobDAO;
    private final StudentDAO studentDAO;

    public ApplicationService(ApplicationDAO applicationDAO, JobDAO jobDAO, StudentDAO studentDAO) {
        this.applicationDAO = applicationDAO;
        this.jobDAO = jobDAO;
        this.studentDAO = studentDAO;
    }

    private boolean jobExists(int id) {
        return jobDAO.findById(id) != null;
    }

    private boolean studentExists(int id) {
        return studentDAO.getStudentById(id) != null;
    }

    public Response saveApplication(Application application) {
        if (!studentExists(application.getStudent().getId()) || !jobExists(application.getJob().getId()))
            throw new EntityNotFoundException();
        application.setSubmissionDate(new Date());
        application.setStatus("Pending");
        application.setResponseDate(null);
        applicationDAO.saveApplication(application);
        return new DataResponse(getApplicationById(application.getId()));
    }

    public Response acceptApplication(int id) {
        Application application = applicationDAO.getApplicationById(id);
        if (application == null)
            throw new EntityNotFoundException();
        application.setStatus("Accepted");
        application.setResponseDate(new Date());
        applicationDAO.updateApplication(application);
        return new DataResponse(getApplicationById(application.getId()));
    }

    public Response rejectApplication(int id) {
        Application application = applicationDAO.getApplicationById(id);
        if (application == null)
            throw new EntityNotFoundException();
        application.setStatus("Rejected");
        application.setResponseDate(new Date());
        applicationDAO.updateApplication(application);
        return new DataResponse(getApplicationById(application.getId()));
    }

    public Response deleteApplication(int id) {
        Application application = applicationDAO.getApplicationById(id);
        applicationDAO.deleteApplication(id);
        return new DataResponse(application);
    }

    public Response getApplicationsByStudentId(int studentId) {
        return new DataResponse(applicationDAO.getApplicationsByStudentId(studentId));
    }

    public Response getApplicationsByJobId(int jobId) {
        return new DataResponse(applicationDAO.getApplicationsByJobId(jobId));
    }

    public Response getApplicationById(int id) {
        return new DataResponse(applicationDAO.getApplicationById(id));
    }


}
