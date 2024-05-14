package com.internhub.api.service;

import com.internhub.api.dao.CompanyDAO;
import com.internhub.api.dao.UserDAO;
import com.internhub.api.entity.Company;
import com.internhub.api.entity.User;
import com.internhub.api.request.SignupRequest;
import com.internhub.api.response.DataResponse;
import com.internhub.api.response.Response;
import com.internhub.api.utils.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service

public class CompanyService {
    private final CompanyDAO dao;
    private final FileUtil util;
    private final UserDAO userDao;

    private final AuthService authService;

    @Value("${api.files.directory.name}")
    private String baseDirectory;

    public CompanyService(CompanyDAO dao, FileUtil util, UserDAO userDao, AuthService authService) {
        this.dao = dao;
        this.util = util;
        this.userDao = userDao;
        this.authService = authService;
    }

    public Response getCompanyById(int id) {
        return new DataResponse(dao.getCompanyById(id));
    }

    public Response saveCompany(SignupRequest request) {
        if (userDao.getUserByEmail(request.getEmail()) != null)
            throw new DuplicateKeyException("A user with this email already exists");
        Company company = new Company();
        company.setName(request.getName());
        company.setEmail(request.getEmail());
        User user = new User();
        user.setEmail(request.getEmail());
        user.setType("company");
        user.setPassword(request.getPassword());
        Response response = authService.register(user);
        company.setUserId(user.getId());
        dao.saveCompany(company);
        return response;
    }

    public Response updateCompany(Company company, MultipartFile image) {
        String fileName = null;
        if (image != null && !image.isEmpty()) {
            fileName = util.saveFile(image, baseDirectory);
            if (fileName == null)
                throw new RuntimeException("could not upload file");
        } else {
            fileName = dao.getCompanyById(company.getId()).getLogo();
        }
        company.setLogo(fileName);
        company.setUserId(dao.getCompanyById(company.getId()).getUserId());
        dao.updateCompany(company);
        return new DataResponse(dao.getCompanyById(company.getId()));
    }
}
