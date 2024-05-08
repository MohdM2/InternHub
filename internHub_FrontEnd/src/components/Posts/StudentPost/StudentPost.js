import "./StudentPost.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DangerousIcon from "@mui/icons-material/Dangerous";
export default function StudentPost({ details }) {
  return (
    <div>
      <div className="sti-post">
        <div className="sti-post-details">
          <h1 className="sti-header">{"Zaid Osama"}</h1>
          <span>{"Full stack developer"}</span>
          <span>
            {"Jordan"} - {"Amman"}
          </span>
          <span>3 days ago</span>
        </div>
        <div className="footer">
          <span>
            <CheckCircleOutlineIcon style={{ color: "#1EA81B" }} />
            <input type="submit" value="Accept" className="accept" />
          </span>
          <span>
            <DangerousIcon style={{ color: "red" }} />
            <input type="submit" value="Reject" className="reject" />
          </span>
        </div>
      </div>
    </div>
  );
}
