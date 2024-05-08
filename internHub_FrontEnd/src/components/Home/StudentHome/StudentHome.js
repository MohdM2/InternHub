import "./StudentHome.css";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import studentHome from "../../../Assets/images/studentHome.png";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
import CompanyAddNewPostOverlay from "../../Overlays/CompanyAddNewPostOverlay/CompanyAddNewPostOverlay";
import zIndex from "@mui/material/styles/zIndex";
import Recent from "../../Posts/CompanyPost/Recent";
import Apply from "../../Posts/CompanyPost/Apply";
export default function StudentHome() {
  const location = useLocation();
  const navigate = useNavigate();
  function goToHomePage() {}

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
  function seeAllPosts() {
    navigate("/studentpostspreview", {
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
  return (
    <div className="st-container">
      <div className="st-black-bg">
        <h2 className="st-logo" onClick={goToHomePage}>
          InternHub
        </h2>
        <div className="st-img-logout">
          <AccountCircleIcon
            className="st-accountCircle"
            onClick={goToProfile}
          />
          <input
            className="st-logout"
            type="submit"
            value="logout"
            onClick={logout}
          />
        </div>
      </div>
      <div className="st-img-newintern-container">
        <div className="st-img">
          <img src={studentHome} alt="" />
        </div>
        <div className="st-text">
          <h1>Let us help you finding the best internship</h1>
          <span>
            the easiest way to find an internship that can develop your skills{" "}
          </span>
        </div>
      </div>

      <div className="st-posts-section-container">
        <h1>Recent applications</h1>
        <div className="st-applications-container">
          <Recent status={"accept"} />
          <Recent status={"accept"} />
          <Recent status={"pending"} />
          <Recent status={"accept"} />
          <Recent status={"reject"} />
          <Recent status={"reject"} />
          <Recent status={"pending"} />
          <Recent status={"pending"} />
        </div>
        <h1>Apply now </h1>
        <div className="st-apply-container">
          <Apply />
          <Apply />
          <Apply />
          <Apply />
          <Apply />
          <Apply />
          <Apply />
          <Apply />
        </div>
        <div className="st-seeall">
          <button onClick={seeAllPosts}>See All</button>
        </div>
      </div>
    </div>
  );
}
