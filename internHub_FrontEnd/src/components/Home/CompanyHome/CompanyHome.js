import "./CompanyHome.css";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import companyHome from "../../../Assets/images/companyHome.png";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
import CompanyAddNewPostOverlay from "../../Overlays/CompanyAddNewPostOverlay/CompanyAddNewPostOverlay";
import zIndex from "@mui/material/styles/zIndex";
export default function CompanyHome() {
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
        phone: location.state.phone,
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
  function postAnewInternShip() {
    // console.log(1);
  }

  return (
    <div className="ch-container">
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
      <div className="ch-img-newintern-container">
        <div className="ch-img">
          <img src={companyHome} alt="" />
        </div>
        <div className="ch-text">
          <h1>
            Help the students start their career by posting available
            internships
          </h1>

          <CompanyAddNewPostOverlay className="input" />
        </div>
      </div>

      <div className="ch-posts-section-container">
        <h1>Your internships</h1>
        <div className="ch-posts-container">
          <CompanyPost
            style={{ backgroundColor: "green", display: "block" }}
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
          <CompanyPost
            details={{
              companyName: location.search.companyName,
              country: location.state.country,
              city: location.state.city,
            }}
          />
        </div>
      </div>
    </div>
  );
}
