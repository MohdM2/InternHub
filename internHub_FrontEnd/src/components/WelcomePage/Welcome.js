import "./Welcome.css";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useUser } from "../../Contexts/UserContext";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function Welcome() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  let location = useLocation();
  function goToInfoPage() {
    if (user.type == "student") {
      navigate("/studentinfo");
    } else if (user.type == "company") {
      navigate("/companyinfo");
    }
  }

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#fff");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="w-container">
      {loading ? (
        <ClimbingBoxLoader color={color} loading={loading} size={20} />
      ) : (
        <>
          <div className="w-check-icon-container">
            <CheckCircleIcon className="w-check-icon" />
          </div>
          <div className="w-text-container">
            <h1 className="w-header">
              welcome{" "}
              {user.type === "company"
                ? user.data.name
                : user.data.firstName + " " + user.data.lastName}{" "}
              !
            </h1>
            <p className="w-paragraph">
              {user.type == "student"
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
        </>
      )}
    </div>
  );
}
