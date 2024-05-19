import "./StudentPostsPreview.css";
import Apply from "../Posts/CompanyPost/Apply";
import { useUser } from "../../Contexts/UserContext";
import NavBar from "../Nav/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import DropDownNewInternShip from "../DropDownNewInternshipForm/DropDownNewInternShip";
import { TextField } from "@mui/material";
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
  async function fetchJobs() {
    try {
      const jobs = await axios.get(`http://localhost:8080/jobs`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setJobs(jobs.data.data);
      setFilteredJobs(jobs.data.data);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  async function fetchCategories() {
    const categories = await axios.get("http://localhost:8080/categories", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setAvailableCategories(categories.data.data);
  }
  useEffect(() => {
    fetchJobs();
    fetchCategories();
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

  return (
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
              <Apply data={j}></Apply>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
