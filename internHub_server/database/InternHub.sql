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
('Blockchain Development'),
('Decentralized Finance (DeFi)'),
('Smart Contract Development'),
('Cryptocurrency Protocols'),
('Ethereum'),
('Web3 Development'),
('Solidity'),
('Distributed Systems'),
('Concurrency'),
('Parallel Programming'),
('Functional Programming'),
('Reactive Programming'),
('Web Development Frameworks'),
('Mobile Development Frameworks'),
('Cross-Platform Development'),
('AR/VR Development'),
('Internet of Things (IoT)'),
('Firmware Development'),
('RTOS (Real-Time Operating Systems)'),
('Embedded Systems Programming'),
('UI/UX Design'),
('Accessibility Standards'),
('User Testing'),
('Human-Computer Interaction (HCI)'),
('A/B Testing'),
('Content Management Systems (CMS)'),
('E-commerce Platforms'),
('Payment Gateways Integration'),
('Web Scraping'),
('API Integration'),
('Data Engineering'),
('ETL (Extract, Transform, Load) Processes'),
('Data Governance'),
('Data Privacy Regulations Compliance'),
('Data Ethics'),
('Geospatial Analysis'),
('Time Series Analysis'),
('Reinforcement Learning'),
('Generative Adversarial Networks (GANs)'),
('Computer Vision'),
('Robotics'),
('Quantum Computing'),
('Cyber-Physical Systems'),
('Edge Computing'),
('Federated Learning'),
('Explainable AI (XAI)'),
('Automated Machine Learning (AutoML)'),
('Model Deployment'),
('Model Interpretability'),
('Bias and Fairness in AI'),
('Deep Reinforcement Learning'),
('Transfer Learning'),
('Meta-Learning'),
('Natural Language Understanding (NLU)'),
('Knowledge Graphs'),
('Data Labeling'),
('Anomaly Detection'),
('Customer Relationship Management (CRM) Systems'),
('Supply Chain Management (SCM) Systems'),
('Enterprise Resource Planning (ERP) Systems'),
('Business Intelligence (BI) Tools'),
('Data Governance Platforms'),
('Regulatory Compliance Software'),
('Risk Management Systems'),
('Portfolio Management Systems'),
('Algorithmic Trading Platforms'),
('Financial Modeling'),
('Quantitative Analysis'),
('Risk Assessment'),
('Algorithmic Bias Mitigation'),
('Fairness Metrics'),
('Data Augmentation'),
('Model Optimization'),
('Federated Analytics'),
('Blockchain Governance'),
('Consensus Algorithms'),
('Digital Identity Management'),
('Tokenization Platforms'),
('Non-Fungible Tokens (NFTs)'),
('Stablecoins'),
('Decentralized Autonomous Organizations (DAOs)'),
('Cross-Chain Interoperability'),
('Zero-Knowledge Proofs'),
('Layer 2 Scaling Solutions'),
('Oracles'),
('Privacy-Preserving Technologies'),
('Decentralized Storage Systems'),
('Distributed Ledger Technologies'),
('Game Development'),
('Game Engines'),
('Physics Simulation'),
('Rendering Techniques'),
('Multiplayer Networking'),
('Game AI'),
('Game Design Patterns'),
('Game Monetization Models'),
('Gamification Strategies'),
('Audio Programming'),
('Music Composition Software'),
('Digital Signal Processing'),
('Sound Design'),
('Audio Synthesis'),
('Audio Effects Programming'),
('Recording and Mixing'),
('Mastering'),
('Live Sound Engineering'),
('Film Scoring'),
('Music Theory'),
('Music Production Techniques'),
('Music Licensing and Copyright'),
('Live Performance Technology'),
('Concert Production'),
('Studio Acoustics'),
('Instrument Maintenance and Repair'),
('Music Business Management'),
('Event Planning and Promotion'),
('Talent Booking'),
('Tour Management'),
('Merchandising'),
('Fan Engagement Strategies'),
('Crowdfunding Platforms'),
('Online Streaming Platforms'),
('Content Distribution Networks (CDNs)'),
('Audio Streaming Protocols'),
('Video Streaming Protocols'),
('Content Delivery Optimization'),
('Digital Rights Management (DRM)'),
('Interactive Media'),
('Immersive Experiences'),
('Augmented Reality (AR)'),
('Virtual Reality (VR)'),
('Mixed Reality (MR)'),
('360° Video Production'),
('Immersive Sound Design'),
('Immersive Storytelling'),
('Spatial Computing'),
('User Interface Design for Immersive Technologies'),
('Motion Capture'),
('Haptic Feedback Systems'),
('Gesture Recognition'),
('Brain-Computer Interfaces (BCIs)'),
('Biometric Authentication'),
('Personalization Algorithms'),
('Recommender Systems'),
('Behavioral Analytics'),
('User Retention Strategies'),
('User Engagement Metrics'),
('Churn Prediction'),
('A/B/n Testing'),
('Multivariate Testing'),
('Feature Flagging'),
('Experimentation Platforms'),
('User Segmentation'),
('Cohort Analysis'),
('Predictive Analytics'),
('Prescriptive Analytics'),
('Customer Lifetime Value (CLV)'),
('Customer Acquisition Cost (CAC)'),
('Customer Churn Rate (CCR)'),
('Net Promoter Score (NPS)'),
('Customer Satisfaction (CSAT)'),
('Voice of Customer (VoC) Analysis'),
('Market Basket Analysis'),
('RFM Analysis'),
('Conjoint Analysis'),
('Survival Analysis'),
('Social Network Analysis'),
('Sentiment Analysis'),
('Topic Modeling'),
('Text Classification'),
('Text Summarization'),
('Entity Recognition'),
('Intent Detection'),
('Speech Recognition'),
('Speaker Identification'),
('Voice Biometrics'),
('Text-to-Speech (TTS) Systems'),
('Speech-to-Text (STT) Systems'),
('Emotion Recognition'),
('Natural Language Generation (NLG)'),
('Machine Translation'),
('Document Understanding'),
('Language Modeling'),
('Named Entity Recognition (NER)'),
('Coreference Resolution'),
('Question Answering Systems'),
('Dialogue Systems'),
('Chatbots'),
('Knowledge Graph Embeddings'),
('Graph Neural Networks'),
('Graph Representation Learning'),
('Graph Algorithms'),
('Graph Query Languages'),
('Graph Visualization'),
('Social Media Analytics'),
('Adaptability and Learning Agility');

-- Insert categories into the table
INSERT INTO categories (name) VALUES
('Frontend Development'),
('Backend Development'),
('Full-stack Web Development'),
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
('Blockchain Development'),
('Augmented Reality (AR) Development'),
('Virtual Reality (VR) Development'),
('Embedded Systems Development'),
('Natural Language Processing (NLP)'),
('Big Data Engineering'),
('Ethical Hacking'),
('Industrial Automation'),
('Robotics Engineering'),
('Gaming Software Development');