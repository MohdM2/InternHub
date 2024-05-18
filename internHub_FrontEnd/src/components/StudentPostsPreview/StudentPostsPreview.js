import "./StudentPostsPreview.css";
import Apply from "../Posts/CompanyPost/Apply";
import { useUser } from "../../Contexts/UserContext";
import NavBar from "../Nav/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
export default function StudentPostsPreview() {
  const { user } = useUser();
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
  function filter() {
    // console.log(44);
  }

  return (
    <div className="spp-container">
      <NavBar
        shoWProfileButton={true}
        showHomeButton={true}
        showBackButton={true}
      />
      <div className="spp-left-right-container">
        <div className="left">
          <h1>Internships Filter</h1>
          <div className="boxes">
            <div className="box">
              <h1>Company name</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>location</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>Payment</h1>
              <input type="text" />
            </div>
            <div className="box">
              <h1>Job title</h1>
              <input type="text" />
            </div>
            <input
              className="submit"
              type="submit"
              value="search"
              onClick={filter}
            />
          </div>
        </div>
        <div className="right">
          <div className="spp-container"></div>
        </div>
      </div>
    </div>
  );
}
