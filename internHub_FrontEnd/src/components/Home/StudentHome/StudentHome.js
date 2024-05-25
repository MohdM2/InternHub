import "./StudentHome.css";
import { useLocation, useNavigate } from "react-router-dom";
import studentHome from "../../../Assets/images/studentHome.png";
import Recent from "../../Posts/CompanyPost/Recent";
import Apply from "../../Posts/CompanyPost/Apply";
import NavBar from "../../Nav/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../../Contexts/UserContext";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function StudentHome() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplicationss] = useState([]);
  const { user } = useUser();
  async function fetchData() {
    try {
      const applications = await axios.get(
        `http://localhost:8080/applications/student/${user.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setApplicationss(applications.data.data);
      const appliedJobs = applications.data.data.map((a) => a.job.id);
      const jobs = await axios.get(`http://localhost:8080/jobs`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setJobs(jobs.data.data.filter((j) => !appliedJobs.includes(j.id)));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function seeAllPosts() {
    navigate("/studentpostspreview", {});
  }

  const [loading, setLoading] = useState(false);
  let color = "#36d7b7";

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      speedMultiplier={2}
    />
  ) : (
    <>
      <div className="st-container">
        <NavBar shoWProfileButton={true} />
        <div className="st-img-newintern-container">
          <div className="st-img">
            <img src={studentHome} alt="" />
          </div>
          <div className="st-text">
            <h1>Let us help you finding the best internship</h1>
            <span>
              the easiest way to find an internship that can develop your skills{" "}
            </span>
          </div>
        </div>

        <div className="st-posts-section-container">
          <h1>Recent applications</h1>
          <div className="st-applications-container">
            {applications.map((a) => (
              <Recent data={a} />
            ))}
          </div>
          <h1>Apply now </h1>
          <div className="st-apply-container">
            {jobs.map((j) => (
              <Apply data={j} submit={fetchData} />
            ))}
          </div>
          <div className="st-seeall">
            <button onClick={seeAllPosts}>See All</button>
          </div>
        </div>
      </div>
    </>
  );
}
