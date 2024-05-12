package com.internhub.api.service;

import com.internhub.api.dao.CompanyDAO;
import com.internhub.api.dao.JobDAO;
import com.internhub.api.entity.Job;
import com.internhub.api.response.DataResponse;
import com.internhub.api.response.Response;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    private final JobDAO jobDao;
    private final CompanyDAO companyDAO;

    public JobService(JobDAO jobDao, CompanyDAO companyDAO) {
        this.jobDao = jobDao;
        this.companyDAO = companyDAO;
    }

    private boolean companyExists(int id) {
        return companyDAO.getCompanyById(id) != null;
    }

    public Response saveJob(Job job) {
        if (!companyExists(job.getCompany().getId()))
            throw new EntityNotFoundException();
        jobDao.save(job);
        return findJobById(job.getId());
    }

    public Response findJobById(int id) {
        return new DataResponse(jobDao.findById(id));
    }


    public Response findAllJobs() {
        return new DataResponse(jobDao.findAll());
    }

    public Response updateJob(Job job) {
        if (!companyExists(job.getCompany().getId()))
            throw new EntityNotFoundException();
        jobDao.update(job);
        return findJobById(job.getId());
    }

    public Response deleteJob(int id) {
        Job job = jobDao.findById(id);
        jobDao.delete(job);
        return new DataResponse(job);
    }

    public Response findJobsByCompanyId(int companyId) {
        if (!companyExists(companyId))
            throw new EntityNotFoundException();
        return new DataResponse(jobDao.findByCompanyId(companyId));
    }
}
