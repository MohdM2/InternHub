import "./StudentDone.css";
import studentDoneImg from "../../../Assets/images/studentDone.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
export default function StudentDone() {
  const navigate = useNavigate();
  const { user } = useUser();
  function goToStudentProfile() {
    navigate(`/studentprofile/${user.data.id}`, {});
  }
  return (
    <div className="sd-container">
      <div className="sd-check-icon-container">
        <img src={studentDoneImg} alt="" />
      </div>
      <div className="sd-text-container">
        <h1 className="sd-header">Explore Opportunities with Ease!</h1>
        <p className="sd-paragraph">
          Dive into the world of internships with ease and relaxation! Discover
          opportunities in a user-friendly environment designed to make your
          search effortless and enjoyable.
        </p>
      </div>
      <div className="go-to-info">
        <input
          className="sd-submit"
          type="submit"
          value="go to my profile    >"
          onClick={goToStudentProfile}
        />
      </div>
    </div>
  );
}
