package com.internhub.api.service;

import com.internhub.api.dao.CourseDAO;
import com.internhub.api.dao.StudentDAO;
import com.internhub.api.dao.UserDAO;
import com.internhub.api.entity.Course;
import com.internhub.api.entity.Student;
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
public class StudentService {
    private StudentDAO dao;
    private FileUtil util;
    private final AuthService authService;
    private final UserDAO userDao;
    private final CourseDAO courseDAO;

    @Value("${api.files.directory.name}")
    private String baseDirectory;

    public StudentService(StudentDAO dao, FileUtil util, AuthService service, UserDAO userDao, CourseDAO courseDAO) {
        this.dao = dao;
        this.util = util;
        this.authService = service;
        this.userDao = userDao;
        this.courseDAO = courseDAO;
    }

    public Response getStudentById(int id) {
        return new DataResponse(dao.getStudentById(id));
    }

    public Response saveStudent(SignupRequest request) {
        if (userDao.getUserByEmail(request.getEmail()) != null)
            throw new DuplicateKeyException("A user with this email already exists");
        Student student = new Student();
        student.setFirstName(request.getName().split(" ")[0]);
        student.setLastName(request.getName().split(" ")[1]);
        student.setEmail(request.getEmail());
        User user = new User();
        user.setEmail(request.getEmail());
        user.setType("student");
        user.setPassword(request.getPassword());
        Response response = authService.register(user);
        student.setUserId(user.getId());
        dao.saveStudent(student);
        return response;
    }

    public Response updateStudent(Student student, MultipartFile cv) {
        Student oldStudent = dao.getStudentById(student.getId());
        if (oldStudent.getCourses() != null)
            for (Course course : oldStudent.getCourses())
                courseDAO.deleteCourse(course.getId());
        if (student.getCourses() != null)
            for (Course course : student.getCourses()) {
                course.setStudentId(student.getId());
                courseDAO.saveCourse(course);
            }
        String fileName = null;
        if (cv != null && !cv.isEmpty()) {
            fileName = util.saveFile(cv, baseDirectory);
            if (fileName == null)
                throw new RuntimeException("could not upload file");
        } else {
            fileName = oldStudent.getCv();
        }
        student.setCv(fileName);
        student.setUserId(oldStudent.getUserId());
        dao.updateStudent(student);
        return new DataResponse(dao.getStudentById(student.getId()));
    }
}
