import "./StudentPostsPreview.css";
import Apply from "../Posts/CompanyPost/Apply";
import { useUser } from "../../Contexts/UserContext";
import NavBar from "../Nav/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import DropDownNewInternShip from "../DropDownNewInternshipForm/DropDownNewInternShip";
import { TextField } from "@mui/material";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function StudentPostsPreview() {
  const internShipType = ["Remote", "On-site", "Hybrid"];
  const internShipDuration = ["1 month", "2 months", "3 months", "3-6 months"];
  const { user } = useUser();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [category, setCategory] = useState({ id: null, name: null });
  const [name, setName] = useState("");
  const [type, setType] = useState(internShipType[0]);
  const [duration, setDuration] = useState(internShipDuration[0]);
  const [availableCategories, setAvailableCategories] = useState([]);
  console.log(jobs);
  async function fetchData() {
    try {
      const categories = await axios.get(`http://localhost:8080/categories`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setAvailableCategories(categories.data.data);
      const applications = await axios.get(
        `http://localhost:8080/applications/student/${user.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const appliedJobs = applications.data.data.map((a) => a.job.id);
      const jobs = await axios.get(`http://localhost:8080/jobs`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const newJobs = jobs.data.data.filter((j) => !appliedJobs.includes(j.id));
      setJobs(newJobs);
      setFilteredJobs(newJobs);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function filter() {
    console.log(duration, type);
    setFilteredJobs(
      jobs.filter((j) => {
        return (
          j.category.name === category.name &&
          j.duration === duration &&
          j.onSiteRemote === type &&
          j.company.name.includes(name)
        );
      })
    );
  }
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36d7b7");

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
      <div className="spp-container">
        <NavBar
          shoWProfileButton={true}
          showHomeButton={true}
          showBackButton={true}
        />
        <div className="spp-left-right-container">
          <div className="left">
            <h1>Filter Internships</h1>
            <div className="boxes">
              <div className="box">
                <TextField
                  fullWidth
                  className="canp-field"
                  margin="dense"
                  label="Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
              </div>
              <div className="box">
                <DropDownNewInternShip
                  className="canp-field"
                  title="Internship Category"
                  data={availableCategories.map((c) => c.name)}
                  value={category.name}
                  change={(e) =>
                    setCategory(
                      availableCategories.find((c) => c.name === e.target.value)
                    )
                  }
                />
              </div>
              <div className="box">
                <DropDownNewInternShip
                  className="canp-field"
                  title="Internship Type"
                  data={internShipType}
                  value={type}
                  change={(e) => setType(e.target.value)}
                />
              </div>
              <div className="box">
                <DropDownNewInternShip
                  className="canp-field"
                  title="Internship Duration"
                  data={internShipDuration}
                  value={duration}
                  change={(e) => setDuration(e.target.value)}
                />
              </div>
              <input
                className="submit"
                type="submit"
                value="Search`"
                onClick={filter}
              />
            </div>
          </div>
          <div className="right">
            <div className="spp-container">
              {filteredJobs.map((j) => (
                <Apply data={j} submit={fetchData}></Apply>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
