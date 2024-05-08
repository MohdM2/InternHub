import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import StudentInfo from "./components/InfoPage/StudentInfo/StudentInfo";
import CompanyInfo from "./components/InfoPage/CompanyInfo/CompanyInfo";
import Welcome from "./components/WelcomePage/Welcome";
import StudentProfile from "./components/profilePage/StudentProfile/StudentProfile";
import CompanyProfile from "./components/profilePage/CompanyProfile/CompanyProfile";
import CompanyDone from "./components/DoneInfo/CompanyDoneInfo/CompanyDone";
import StudentDone from "./components/DoneInfo/StudentDoneInfo/StudentDone";
import CompanyHome from "./components/Home/CompanyHome/CompanyHome";
import StudentHome from "./components/Home/StudentHome/StudentHome";
import CompanyEdit from "./components/Edit/CompanyEdit/CompanyEdit";
import CompanyApplications from "./components/Applications/CompanyApplications";
import StudentEdit from "./components/Edit/StudentEdit/StudentEdit";
import StudentPostsPreview from "./components/StudentPostsPreview/StudentPostsPreview";
import "./App.css";
function App() {
  return (
    <div className="app">
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/studentinfo" element={<StudentInfo />} />
        <Route exact path="/companyinfo" element={<CompanyInfo />} />
        <Route exact path="/studentprofile" element={<StudentProfile />} />
        <Route exact path="/companyprofile" element={<CompanyProfile />} />
        <Route exact path="/companydone" element={<CompanyDone />} />
        <Route exact path="/studentdone" element={<StudentDone />} />
        <Route exact path="/companyhome" element={<CompanyHome />} />
        <Route exact path="/studenthome" element={<StudentHome />} />
        <Route exact path="/companyedit" element={<CompanyEdit />} />
        <Route exact path="/studentedit" element={<StudentEdit />} />
        <Route
          exact
          path="/studentpostspreview"
          element={<StudentPostsPreview />}
        />
        <Route
          exact
          path="/companyapplication"
          element={<CompanyApplications />}
        />
      </Routes>
    </div>
  );
}

export default App;
