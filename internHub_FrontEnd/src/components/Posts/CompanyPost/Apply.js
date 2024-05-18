import "./CompanyPost.css";
import StudentPreviewPostOverlay from "../../Overlays/StudentPreviewPostOverlay";
export default function Apply({ data }) {
  function showPostDetails() {}
  return (
    <div>
      <div className="cpi-post" onClick={showPostDetails}>
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
          <span> "22/4/2022" </span>

          <StudentPreviewPostOverlay className="preview" data={data} />
        </div>
      </div>
    </div>
  );
}
