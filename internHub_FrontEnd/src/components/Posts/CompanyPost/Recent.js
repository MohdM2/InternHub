import "./CompanyPost.css";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
export default function Recent({ data }) {
  return (
    <div>
      <div className="cpi-post">
        <img
          src={`http://localhost:8080/files/${data.job.company.logo}`}
          alt=""
        />
        <div className="cpi-post-details">
          <h1 className="cpi-header">{data.job.name}</h1>
          <div className="cpi-name-location">
            <span>{data.job.company.name}</span>
            <span>
              {data.job.onSiteRemote} - {data.job.duration}
            </span>
          </div>
        </div>
        <div className="cpi-footer">
          <span> {`Applied on: ${data.submissionDate}`} </span>
          {data.status === "Accepted" && (
            <span> {<CheckCircleIcon style={{ color: "green" }} />}</span>
          )}
          {data.status === "Pending" && (
            <span> {<RemoveCircleIcon style={{ color: "yellow" }} />}</span>
          )}
          {data.status === "Rejected" && (
            <span> {<DangerousIcon style={{ color: "red" }} />}</span>
          )}
        </div>
      </div>
    </div>
  );
}
