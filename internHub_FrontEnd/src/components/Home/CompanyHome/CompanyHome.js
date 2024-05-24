import "./CompanyHome.css";
import companyHome from "../../../Assets/images/companyHome.png";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
import CompanyAddNewPostOverlay from "../../Overlays/CompanyAddNewPostOverlay/CompanyAddNewPostOverlay";
import NavBar from "../../Nav/NavBar";
import { useUser } from "../../../Contexts/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
export default function CompanyHome() {
  const { user, updateUser } = useUser();
  const [jobs, setJobs] = useState([]);
  async function fetchJobs() {
    try {
      const jobs = await axios.get(
        `http://localhost:8080/jobs/company/${user.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setJobs(jobs.data.data);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchJobs();
  }, []);
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
    <div className="ch-container">
      <NavBar shoWProfileButton={true} />
      <div className="ch-img-newintern-container">
        <div className="ch-img">
          <img src={companyHome} alt="" />
        </div>
        <div className="ch-text">
          <h1>
            Help the students start their career by posting available
            internships
          </h1>

          <CompanyAddNewPostOverlay className="input" submit={fetchJobs} />
        </div>
      </div>

      <div className="ch-posts-section-container">
        <h1>Your internships</h1>
        <div className="ch-posts-container">
          {jobs.map((j) => (
            <CompanyPost data={j} />
          ))}
        </div>
      </div>
    </div>
  );
}
