import "./CompanyDone.css";
import companyDoneImg from "../../../Assets/images/companyDone.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
export default function CompanyDone() {
  const navigate = useNavigate();
  const { user } = useUser();
  function goToCompanyProfile() {
    navigate(`/companyprofile/${user.data.id}`);
  }
  return (
    <div className="cd-container">
      <div className="cd-check-icon-container">
        <img src={companyDoneImg} alt="" />
      </div>
      <div className="cd-text-container">
        <h1 className="cd-header">
          Let's Discover the Next Generation of Leaders Together!
        </h1>
        <p className="cd-paragraph">
          We're thrilled to have you join us on our mission to find exceptional
          talent. As we embark on this journey together, let's dive into the
          search for the brightest minds and future leaders.
        </p>
      </div>
      <div className="go-to-info">
        <input
          className="cd-submit"
          type="submit"
          value="go to my profile    >"
          onClick={goToCompanyProfile}
        />
      </div>
    </div>
  );
}
