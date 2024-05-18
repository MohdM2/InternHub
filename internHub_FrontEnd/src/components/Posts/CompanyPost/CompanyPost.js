import "./CompanyPost.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function CompanyPost({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  function goToPostApplication() {
    navigate(`/jobApplications/${data.id}`);
  }
  return (
    <div>
      <div className="cpi-post" onClick={goToPostApplication}>
        <img src={`http://localhost:8080/files/${data.company.logo}`} alt="" />
        <div className="cpi-post-details">
          <h1 className="cpi-header">{data.name}</h1>
          <div className="cpi-name-location">
            <span>{data.company.name}</span>
            <span>
              {data.onSiteRemote} - {data.duration}
            </span>
          </div>
        </div>
        <div className="cpi-footer">
          <span> View Details </span>
          <span> {">"} </span>
        </div>
      </div>
    </div>
  );
}
