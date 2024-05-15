import "./StudentPostsPreview.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import Apply from "../Posts/CompanyPost/Apply";
export default function StudentPostsPreview() {
  const location = useLocation();
  const navigate = useNavigate();
  function goToHomePage() {
    navigate("/studenthome", {
      state: {
        userType: location.state.userType,
        username: location.state.username,
        email: location.state.email,

        firstName: location.state.firstName,
        lastName: location.state.lastName,
        bio: location.state.bio,
        cvLink: location.state.cvLink,
        phone: location.state.phone,
        major: location.state.major,
        gpa: location.state.gpa,
        universityName: location.state.universityName,

        certificates: location.state.certificates,
        skills: location.state.skills,

        address: location.state.address,
        from: location.state.from,
        to: location.state.to,
      },
    });
  }

  function logout() {
    navigate("/");
  }
  function goToProfile() {
    navigate("/studentprofile", {
      state: {
        userType: location.state.userType,
        username: location.state.username,
        email: location.state.email,

        firstName: location.state.firstName,
        lastName: location.state.lastName,
        bio: location.state.bio,
        cvLink: location.state.cvLink,
        phone: location.state.phone,
        major: location.state.major,
        gpa: location.state.gpa,
        universityName: location.state.universityName,

        certificates: location.state.certificates,
        skills: location.state.skills,

        address: location.state.address,
        from: location.state.from,
        to: location.state.to,
      },
    });
  }

  function filter() {
    // console.log(44);
  }

  return (
    <div className="spp-container">
      <div className="spp-black-bg">
        <h2 className="spp-logo" onClick={goToHomePage}>
          InternHub
        </h2>
        <div className="spp-img-logout">
          <AccountCircleIcon
            className="spp-accountCircle"
            onClick={goToProfile}
          />
          <input
            className="spp-logout"
            type="submit"
            value="logout"
            onClick={logout}
          />
        </div>
      </div>
      <div className="spp-left-right-container">
        <div className="left">
          <h1>Internships Filter</h1>
          <div className="boxes">
            <div className="box">
              <h1>Company name</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>location</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>Payment</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>Job title</h1>
              <input type="text" />
            </div>
            <input
              className="submit"
              type="submit"
              value="search"
              onClick={filter}
            />
          </div>
        </div>
        <div className="right">
          <div className="spp-container">
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
            <div className="post">
              <Apply />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
