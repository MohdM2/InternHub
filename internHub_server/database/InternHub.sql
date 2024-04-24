CREATE TABLE skills (
    skill_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    cv_link VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE companies (
    company_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(100),
    bio TEXT,
    number_of_employees INT,
    address VARCHAR(100),
    city VARCHAR(100),
    country VARCHAR(100),
    logo VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE jobs (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    name VARCHAR(100),
    description TEXT,
    category_id INT,
    duration INT,
    is_paid BIT,
    on_site_remote VARCHAR(20),
    FOREIGN KEY (company_id) REFERENCES companies(company_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE jobSkills (
    job_skill_id INT PRIMARY KEY AUTO_INCREMENT,
    job_id INT,
    skill_id INT,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE applications (
    application_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    job_id INT,
    status VARCHAR(20),
    submission_date DATE,
    response_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_name VARCHAR(100),
    provider VARCHAR(100),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE studentSkills (
    student_skill_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    skill_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);
