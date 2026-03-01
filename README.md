# InternHub 🚀  
A platform that connects **university students** looking for **internship/training opportunities** with **IT companies** that want to post and manage openings.

> Repo structure:
- `internHub_FrontEnd/` → Frontend app  
- `internHub_server/` → Backend server (API)

---

## ✨ Key Features
### For Students
- Browse available internships
- Search & filter by company / title / location
- View internship details
- Apply / submit interest 

### For Companies
- Create and manage internship posts
- Update / delete postings
- Review applicants 

### General
- Authentication & roles (Student / Company )
- Responsive UI

---

## 🧱 Tech Stack
**Frontend**
- JavaScript (React)
- CSS

**Backend**
- Java (REST API)
- SQL Server (Database)

---

## 🧭 Project Architecture (High Level)
- Frontend (React) consumes Backend REST APIs
- Backend handles:
  - Auth & authorization
  - Business logic
  - Database access (SQL Server)

---

## ✅ Prerequisites
Make sure you have these installed:

- **npm**  
- **Java** (JDK 8+ / 11+ recommended)
- **Maven** 
- **SQL Server** 

---

## ⚙️ Setup & Run (Local)

### 1) Clone
```bash
git clone https://github.com/MohdM2/InternHub
cd InternHub/internHub_FrontEnd
npm clean install
npm run dev
