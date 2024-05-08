import "./CompanyApplications.css";
import PlaceIcon from "@mui/icons-material/Place";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";
import CompanyPost from "../Posts/CompanyPost/CompanyPost";
import StudentPost from "../Posts/StudentPost/StudentPost";
export default function CompanyApplications() {
  const location = useLocation();
  const navigate = useNavigate();
  function goToHomePage() {
    navigate("/companyhome", {
      state: {
        companyName: location.state.companyName,
        userType: location.state.userType,
        email: location.state.email,
        Password: location.state.password,
        bio: location.state.bio,
        numEmployees: location.state.numEmployees,
        address: location.state.address,
        city: location.state.city,
        country: location.state.country,
        logo: location.state.logo,
        Phone: location.state.phone,
        companySpeciality: location.state.companySpeciality,
      },
    });
  }

  function logout() {
    navigate("/");
  }
  function goToProfile() {
    navigate("/companyprofile", {
      state: {
        companyName: location.state.companyName,
        userType: location.state.userType,
        email: location.state.email,
        Password: location.state.password,
        bio: location.state.bio,
        numEmployees: location.state.numEmployees,
        address: location.state.address,
        city: location.state.city,
        country: location.state.country,
        logo: location.state.logo,
        phone: location.state.phone,
        companySpeciality: location.state.companySpeciality,
      },
    });
  }
  return (
    <>
      <div className="ch-black-bg">
        <h2 className="ch-logo" onClick={goToHomePage}>
          InternHub
        </h2>
        <div className="ch-img-logout">
          <AccountCircleIcon
            className="ch-accountCircle"
            onClick={goToProfile}
          />
          <input
            className="ch-logout"
            type="submit"
            value="logout"
            onClick={logout}
          />
        </div>
      </div>
      <div className="ca-container">
        <div className="ca-details-container">
          {/* Display the entered information */}

          <h1 className="ca-title">Backend Developer</h1>
          <div className="ca-preview-details">
            <div className="ca-img">
              <img
                src="https://placehold.co/100x100/0ed77a/green"
                alt="company img"
              />
            </div>
            <div className="ca-text">
              <h5>progress soft</h5>
              <h6>
                <PlaceIcon style={{ fontSize: "15px" }} /> Amman - Jordan
              </h6>
              <div className="ca-boxes">
                <span>On-site</span>
                <span>3-6 months</span>
                <span>150 JD</span>
              </div>
            </div>
          </div>
          <div className="ca-about">
            <h1>my role</h1>
            <p>
              We’re searching for stand-out candidates who want to work in—and
              learn tons about—one of the following fields: Backend software
              engineering Data engineering Infrastructure engineering Mobile
              software engineering Security & privacy engineering Don’t worry if
              you’re not sure what area you’d like to work in just yet: We can
              take the time to chat about your interests and work out what’s
              likely to be the best fit for you. And when you apply for a job at
              Bending Spoons, we consider you for every suitable open position.
            </p>
            <h1 style={{ marginTop: "30px" }}>Qualifications</h1>
            <p>
              Bachelor’s degree in Computer Science, Engineering or any related
              field. Proven working experience in Java development. Object
              oriented analysis and design using common design patterns.
              Experience in Spring framework and its related technologies.
            </p>
            <h1 style={{ marginTop: "30px" }}>responsibilities</h1>
            <p>
              Contribute to all phases of the development life cycle. Write
              well-designed, testable and efficient code. Ensure that designs
              comply with the specifications. Support continuous improvement by
              investigating alternatives and technologies and presenting these
              for architectural review.
            </p>
          </div>
          {/* Render the internship details here */}
        </div>
        <div className="ca-applications-container">
          <h1>Applications</h1>
          <span>{"(6 applications)"}</span>
          <div className="ca-posts-container">
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
            <div className="post">
              <StudentPost
                details={{
                  companyName: "Atypon",
                  country: "Jordan",
                  city: "Amman",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
