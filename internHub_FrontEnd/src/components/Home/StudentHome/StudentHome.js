import "./StudentHome.css";
import { useLocation, useNavigate } from "react-router-dom";
import studentHome from "../../../Assets/images/studentHome.png";
import Recent from "../../Posts/CompanyPost/Recent";
import Apply from "../../Posts/CompanyPost/Apply";
import NavBar from "../../Nav/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../../Contexts/UserContext";
export default function StudentHome() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplicationss] = useState([]);
  const { user } = useUser();
  async function fetchJobs() {
    try {
      const jobs = await axios.get(`http://localhost:8080/jobs`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setJobs(jobs.data.data);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  async function fetchApplications() {
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
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);
  console.log(applications);
  function seeAllPosts() {
    navigate("/studentpostspreview", {});
  }
  return (
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
            <Apply data={j} submit={fetchApplications} />
          ))}
        </div>
        <div className="st-seeall">
          <button onClick={seeAllPosts}>See All</button>
        </div>
      </div>
    </div>
  );
}
