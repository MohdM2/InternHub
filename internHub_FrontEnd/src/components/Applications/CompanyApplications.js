import "./CompanyApplications.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import StudentPost from "../Posts/StudentPost/StudentPost";
import NavBar from "../Nav/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../Contexts/UserContext";

export default function CompanyApplications() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [applications, setApplications] = useState([]);
  const { user } = useUser();
  const pendingApplications = applications.filter(
    (a) => a.status === "Pending"
  );
  async function fetchApplications() {
    const applicationsResponse = await axios.get(
      `http://localhost:8080/applications/job/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setApplications(applicationsResponse.data.data);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const jobResponse = await axios.get(
          `http://localhost:8080/jobs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setJob(jobResponse.data.data);
        fetchApplications();
      } catch (e) {
        alert(e);
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar
        showBackButton={true}
        shoWProfileButton={true}
        showHomeButton={true}
      />
      <div className="ca-container">
        <div className="ca-details-container">
          {job ? (
            <>
              <h1 className="ca-title">{job.name}</h1>
              <div className="ca-preview-details">
                <div className="ca-img">
                  <img
                    src={`http://localhost:8080/files/${job.company.logo}`}
                    alt="company img"
                    style={{ maxWidth: "100px" }}
                  />
                </div>
                <div className="ca-text">
                  <h5>{job.company.name}</h5>
                  <div className="ca-boxes">
                    <span>{job.onSiteRemote}</span>
                    <span>{job.duration}</span>
                    <span>{job.paid ? `${job.salary} JOD` : "Unpaid"}</span>
                  </div>
                </div>
              </div>
              <div className="ca-about">
                <h1>Description</h1>
                <p style={{ whiteSpace: "pre-wrap" }}>{job.description}</p>
                <h1 style={{ marginTop: "30px" }}>Required Skills</h1>
                <p className="canp-skills">
                  {job.skills.map((s, index) => (
                    <span key={index}>{s.name}</span>
                  ))}
                </p>
              </div>
            </>
          ) : (
            <p>Loading job details...</p>
          )}
        </div>
        <div className="ca-applications-container">
          <h1>Pending Applications</h1>
          <span>{`(${pendingApplications.length} applications)`}</span>
          <div className="ca-posts-container">
            {pendingApplications.map((a) => (
              <StudentPost key={a.id} data={a} respond={fetchApplications} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
