import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import StudentInfo from "./components/InfoPage/StudentInfo/StudentInfo";
import CompanyInfo from "./components/InfoPage/CompanyInfo/CompanyInfo";
import Welcome from "./components/WelcomePage/Welcome";
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
      </Routes>
    </div>
  );
}

export default App;
