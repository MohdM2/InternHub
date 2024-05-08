import "./CompanyPost.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function CompanyPost({ details }) {
  const navigate = useNavigate();
  const location = useLocation();
  function goToPostApplication() {
    navigate("/companyapplication", {
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
    <div>
      <div className="cpi-post" onClick={goToPostApplication}>
        <img src="https://placehold.co/40x40/000000/FFF" alt="" />
        <div className="cpi-post-details">
          <h1 className="cpi-header">Web Developer</h1>
          <div className="cpi-name-location">
            <span>{"Atypon"}</span>
            <span>
              {"Jordan"} - {"Amman"}
            </span>
          </div>
        </div>
        <div className="cpi-footer">
          <span> "22/4/2022" </span>
          <span> {">"} </span>
        </div>
      </div>
    </div>
  );
}
