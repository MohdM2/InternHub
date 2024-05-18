import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import "./nav.css";
import { useUser } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function NavBar({
  showHomeButton = false,
  shoWProfileButton = false,
  showBackButton = false,
}) {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  function goToProfile() {
    if (user.type === "student") navigate(`/studentprofile/${user.data.id}`);
    else navigate(`/companyprofile/${user.data.id}`);
  }
  function goToHomePage() {
    if (user.type === "student") navigate("/studenthome");
    else navigate("/companyhome");
  }
  function logout() {
    navigate("/");
    updateUser(null);
  }
  function goBack() {
    navigate(-1);
  }
  return (
    <div className="black-bg">
      <div className="img-logout">
        {showBackButton ? (
          <ArrowBackIcon className="accountCircle" onClick={goBack} />
        ) : (
          ""
        )}
        <h2 className="logo" onClick={goToHomePage}>
          InternHub
        </h2>
      </div>
      <div className="img-logout">
        {shoWProfileButton ? (
          <AccountCircleIcon className="accountCircle" onClick={goToProfile} />
        ) : (
          ""
        )}
        {showHomeButton ? (
          <HomeIcon className="accountCircle" onClick={goToHomePage} />
        ) : (
          ""
        )}
        <input
          className="logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
    </div>
  );
}
