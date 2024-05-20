import "./StudentDone.css";
import studentDoneImg from "../../../Assets/images/studentDone.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function StudentDone() {
  const navigate = useNavigate();
  const { user } = useUser();
  function goToStudentProfile() {
    navigate(`/studentprofile/${user.data.id}`, {});
  }

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36d7b7");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return loading ? (
    <ClimbingBoxLoader
      color={color}
      loading={loading}
      size={20}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translateXY(-50%,-50%)",
      }}
    />
  ) : (
    <>
      <div className="sd-container">
        <div className="sd-check-icon-container">
          <img src={studentDoneImg} alt="" />
        </div>
        <div className="sd-text-container">
          <h1 className="sd-header">Explore Opportunities with Ease!</h1>
          <p className="sd-paragraph">
            Dive into the world of internships with ease and relaxation!
            Discover opportunities in a user-friendly environment designed to
            make your search effortless and enjoyable.
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
    </>
  );
}
