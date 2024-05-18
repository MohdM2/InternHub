import { useEffect, useState } from "react";
import "./CompanyProfile.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
import { useUser } from "../../../Contexts/UserContext";
import NavBar from "../../Nav/NavBar";
import axios from "axios";
export default function CompanyProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState("");
  const { user } = useUser();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function fetchJobs() {
      try {
        let company = null;
        if (id === user.id) company = user.data;
        else
          company = (
            await axios.get(`http://localhost:8080/companies/${id}`, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
          ).data.data;
        setCompany(company);
        const jobs = await axios.get(
          `http://localhost:8080/jobs/company/${id}`,
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
    fetchJobs();
  }, []);
  function editProfile() {
    navigate("/companyedit", {});
  }
  return (
    <div className="cp-container">
      <NavBar showHomeButton={true} />
      <div className="cp-white-bg">
        <div className="cp-name-and-major">
          {company.logo ? (
            <img
              src={`http://localhost:8080/files/${company.logo}`}
              alt="pink"
            />
          ) : (
            <img
              src={`https://placehold.co/50x50/779900/FFF?text=${company.name}`}
              alt="pink"
            />
          )}
          <h1 className="cp-name">{company.name}</h1>
          <h2 className="cp-major">{company.speciality}</h2>
        </div>
        {user.data.id == id ? (
          <div className="cp-editprofile">
            <input
              className="input"
              type="submit"
              value={"edit profile"}
              onClick={editProfile}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="cp-info-content">
        <div className="cp-left-info">
          <div className="cp-aboutus">
            <h1>About us</h1>
            <p>{company.bio}</p>
          </div>
        </div>
        <div className="cp-right-info">
          <div className="cp-information">
            <h1>Information</h1>
            <div className="cp-email">
              Email address<span>{company.email}</span>{" "}
            </div>
            <div className="cp-location">
              Location <span>{company.address}</span>{" "}
            </div>
            <div className="cp-phone">
              Phone number<span>{company.phone}</span>{" "}
            </div>

            <div className="cp-employeesnumber">
              Number of Employees <span>{company.numEmployees}</span>{" "}
            </div>
          </div>

          <hr />
          <div className="cp-internships">
            <h1>Recent internships</h1>
            <div className="cp-posts-container">
              {jobs.slice(-3).map((j) => (
                <CompanyPost data={j} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
