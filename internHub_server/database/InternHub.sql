CREATE TABLE skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    university VARCHAR(100),
    major VARCHAR(100),
    education_start DATE,
    education_end DATE,
    gpa DOUBLE,
    cv VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(100),
    speciality VARCHAR(100),
    bio TEXT,
    number_of_employees VARCHAR(100),
    address VARCHAR(100),
    city VARCHAR(100),
    country VARCHAR(100),
    logo VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    name VARCHAR(100),
    description TEXT,
    category_id INT,
    duration VARCHAR(100),
    is_paid BIT,
    salary DOUBLE,
    on_site_remote VARCHAR(20),
    FOREIGN KEY (company_id) REFERENCES companies(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE job_skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    job_id INT,
    skill_id INT,
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    job_id INT,
    status VARCHAR(20),
    submission_date DATE,
    response_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (job_id) REFERENCES jobs(id)
);

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    name VARCHAR(100),
    provider VARCHAR(100),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE student_skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    skill_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
);


-- Insert skills into the table
INSERT INTO skills (name) VALUES
('Python'),
('Java'),
('C/C++'),
('JavaScript'),
('Ruby'),
('PHP'),
('Swift'),
('Kotlin'),
('Objective-C'),
('TypeScript'),
('HTML5'),
('CSS3'),
('Bootstrap'),
('Node.js'),
('Express.js'),
('RESTful APIs'),
('Responsive Design'),
('Frontend Development'),
('Backend Development'),
('Full Stack Development'),
('SQL'),
('MySQL'),
('PostgreSQL'),
('SQLite'),
('MongoDB'),
('Couchbase'),
('Cassandra'),
('Database Design'),
('Data Modeling'),
('Data Warehousing'),
('TCP/IP'),
('DNS'),
('DHCP'),
('Routing and Switching'),
('Network Security'),
('Firewall Configuration'),
('VPN'),
('Load Balancing'),
('Wireless Networking'),
('Network Monitoring and Analysis'),
('Encryption Techniques'),
('Penetration Testing'),
('Vulnerability Assessment'),
('Intrusion Detection and Prevention Systems'),
('Security Information and Event Management'),
('Secure Coding Practices'),
('Incident Response'),
('Threat Intelligence'),
('Ethical Hacking'),
('Security Compliance'),
('Linux Administration'),
('Windows Server Administration'),
('macOS'),
('Shell Scripting'),
('Virtualization'),
('Containerization'),
('Server Management'),
('Amazon Web Services (AWS)'),
('Microsoft Azure'),
('Google Cloud Platform (GCP)'),
('Cloud Architecture'),
('Cloud Security'),
('DevOps Practices'),
('Infrastructure as Code'),
('Serverless Computing'),
('Microservices'),
('Data Analysis'),
('Data Visualization'),
('Machine Learning'),
('Deep Learning'),
('Natural Language Processing'),
('Big Data Technologies'),
('Statistical Analysis'),
('Predictive Modeling'),
('Data Mining'),
('Agile Methodologies'),
('Software Development Life Cycle'),
('Version Control Systems'),
('Continuous Integration/Continuous Deployment'),
('Issue Tracking Systems'),
('Test-Driven Development'),
('Code Review Practices'),
('Agile Project Management Tools'),
('Problem-Solving'),
('Critical Thinking'),
('Communication Skills'),
('Team Collaboration'),
('Time Management'),
('Project Management'),
('Documentation and Reporting'),
('Client Management'),
('Presentation Skills'),
('Adaptability and Learning Agility');

-- Insert categories into the table
INSERT INTO categories (name) VALUES
('Frontend Development'),
('Backend Development'),
('Full-stack Development'),
('Web Development'),
('Mobile App Development'),
('Software Engineering'),
('Data Science'),
('Data Analytics'),
('UI/UX Design'),
('Cybersecurity'),
('Network Administration'),
('Cloud Computing'),
('DevOps'),
('Quality Assurance (QA) Testing'),
('IT Support'),
('Database Administration'),
('Project Management'),
('Artificial Intelligence/Machine Learning'),
('Internet of Things (IoT)'),
('Game Development');