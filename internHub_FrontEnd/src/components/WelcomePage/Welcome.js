import "./Welcome.css";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  const navigate = useNavigate();
  let location = useLocation();
  function goToInfoPage() {
    if (location.state.userType == "student") {
      navigate("/studentinfo", {
        state: {
          userType: location.state.userType,
          username: location.state.username,
        },
      });
    } else if (location.state.userType == "company") {
      navigate("/companyinfo", {
        state: {
          userType: location.state.userType,
          username: location.state.username,
        },
      });
    }
  }
  return (
    <div className="w-container">
      <div className="w-check-icon-container">
        <CheckCircleIcon className="w-check-icon" />
      </div>
      <div className="w-text-container">
        <h1 className="w-header">welcome {location.state.username} !</h1>
        <p className="w-paragraph">
          {location.state.userType == "student"
            ? "You're all set to embark on your journey with us. Let's finalize your  registration details on the info page to get started."
            : "You're all set to connect with talented individuals through our platform. Let's match these potential interns with your company. Head over to the info page to finalize the registration process and start exploring internship opportunities."}
        </p>
      </div>
      <div className="go-to-info">
        <input
          className="w-submit"
          type="submit"
          value="go to info page    >"
          onClick={goToInfoPage}
        />
      </div>
    </div>
  );
}
