import "./CompanyPost.css";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CompanyAddNewPostOverlay from "../../Overlays/CompanyAddNewPostOverlay/CompanyAddNewPostOverlay";
export default function Recent({ status }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="cpi-post">
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
          {status == "accept" && (
            <span> {<CheckCircleIcon style={{ color: "green" }} />}</span>
          )}
          {status == "pending" && (
            <span> {<RemoveCircleIcon style={{ color: "yellow" }} />}</span>
          )}
          {status == "reject" && (
            <span> {<DangerousIcon style={{ color: "red" }} />}</span>
          )}
        </div>
      </div>
    </div>
  );
}
