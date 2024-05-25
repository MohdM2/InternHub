import React, { useEffect, useState } from "react";
import "./StudentInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import DropDown from "../../DropDownList/DropDown";
import Progressbar from "../../Progressbar/Progressbar";
import StudentAddCertificate from "../../Overlays/StudentAddCertificate/StudentAddCertificate";
import { v4 as uuidv4 } from "uuid";
import ClearIcon from "@mui/icons-material/Clear";
import { useUser } from "../../../Contexts/UserContext";
import axios from "axios";
import NavBar from "../../Nav/NavBar";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function StudentInfo() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [firstName, setFirstName] = useState(user.data.firstName || "");
  const [lastName, setLastName] = useState(user.data.lastName || "");
  const [bio, setBio] = useState(user.data.bio || "");
  const [cv, setCv] = useState({
    file: null,
    link: user.data.cv ? `http://localhost:8080/files/${user.data.cv}` : null,
  });
  const [email, setEmail] = useState(user.data.email || "");
  const [phone, setPhone] = useState(user.data.phone || "");
  const [major, setMajor] = useState(user.data.major || "");
  const [gpa, setGpa] = useState(user.data.gpa || "");
  const [from, setFrom] = useState(user.data.educationStartDate || "");
  const [to, setTo] = useState(user.data.educationEndDate || "");
  const [universityName, setUniversityName] = useState(
    user.data.university || ""
  );
  const [skills, setSkills] = useState(user.data.skills || []);
  const [avilableSkills, setAvailableSKiils] = useState([]);
  const [certificates, setCertificate] = useState(user.data.courses || []);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await axios.get("http://localhost:8080/skills", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAvailableSKiils(response.data.data);
      } catch (error) {
        console.log("Error fetching skills:", error);
      }
    }
    fetchSkills();
  }, []);
  // certification name provider from to
  function handleAddCertificate(certName, provider, f, t) {
    setCertificate([
      ...certificates,
      {
        id: uuidv4(),
        name: certName,
        provider: provider,
        startDate: f,
        endDate: t,
      },
    ]);
  }
  function calculateProgress() {
    const totalFields = 12; // Total number of input fields
    let completedFields = 0;

    if (firstName) completedFields++;
    if (lastName) completedFields++;
    if (email) completedFields++;
    if (bio) completedFields++;
    if (cv.file || cv.link) completedFields++;
    if (phone) completedFields++;
    if (major) completedFields++;
    if (gpa) completedFields++;
    if (from) completedFields = completedFields + 0.5;
    if (to) completedFields = completedFields + 0.5;
    if (universityName) completedFields++;
    completedFields += Math.min(1, skills.length / 3);
    completedFields += Math.min(1, certificates.length);
    let progress = Math.floor((completedFields / totalFields) * 100);
    return progress;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (calculateProgress() < 100) {
      alert(
        "You must complete all fields, and you must enter at least 1 course and 3 skills to continue"
      );
      return;
    }
    try {
      const data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("phone", phone);
      data.append("university", universityName);
      data.append("major", major);
      data.append("educationStartDate", from.replaceAll("-", "/"));
      data.append("educationEndDate", to.replaceAll("-", "/"));
      data.append("gpa", Number(gpa));
      if (cv.file) data.append("cvFile", cv.file);
      data.append("bio", bio);
      for (let i = 0; i < certificates.length; i++) {
        data.append(`courses[${i}].name`, certificates[i].name);
        data.append(`courses[${i}].provider`, certificates[i].provider);
        data.append(
          `courses[${i}].startDate`,
          certificates[i].startDate.replaceAll("-", "/")
        );
        data.append(
          `courses[${i}].endDate`,
          certificates[i].endDate.replaceAll("-", "/")
        );
      }
      for (let i = 0; i < skills.length; i++) {
        data.append(`skills[${i}].id`, skills[i].id);
        data.append(`skills[${i}].name`, skills[i].name);
      }
      const response = await axios.put(
        `http://localhost:8080/students/${user.data.id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to form-data
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response.data.data);
      updateUser({ ...user, data: response.data.data });
      navigate("/studentdone", {});
    } catch (e) {
      alert(e.response.data.error);
    }
  };
  function handleDeleteCertificate(id) {
    let deletedCertificates = certificates.filter((certificate) => {
      return certificate.id != id;
    });
    setCertificate([...deletedCertificates]);
  }
  function handleCvChange(event) {
    const file = event.target.files[0];
    if (file) {
      setCv({ file, link: URL.createObjectURL(file) });
    }
  }
  function numberInputOnWheelPreventChange(e) {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  }

  return (
    <div className="si-student-info-container">
      <NavBar />
      <Progressbar progress={calculateProgress()} />
      <div className="si-white-bg">
        <div className="si-name-and-major">
          <h1 className="si-name">{firstName + " " + lastName}</h1>
          <h2 className="si-major">{major}</h2>
        </div>
      </div>
      <hr className="splitter" />

      <div className="si-form-container">
        <div className="si-bio-container">
          <label className="si-label">About Me :</label>
          <textarea
            className="si-textarea"
            value={bio}
            placeholder=" let's get to know you better"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <div className="si-dropdown-container">
            <label className="si-label">Certificates </label>
            <StudentAddCertificate addCertificate={handleAddCertificate} />
          </div>
          <div className="si-certificates-list">
            {certificates.map((certificate) => (
              <span className="si-certificate" key={certificate.id}>
                {certificate.name}
                <span className="si-delete">
                  <ClearIcon
                    onClick={() => handleDeleteCertificate(certificate.id)}
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "0px",
                      cursor: "pointer",
                    }}
                  />{" "}
                </span>
              </span>
            ))}
          </div>
          <div className="si-dropdown-container">
            <label className="si-label">Skills </label>
            <DropDown
              className="si-list"
              title={"skills"}
              multiple={true}
              data={avilableSkills}
              selectedData={skills}
              change={setSkills}
            />
          </div>
        </div>

        <div className="right-side">
          <h1>Information</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="si-input-container">
              <label className="si-label">First Name:</label>
              <input
                className="input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="si-input-container">
              <label className="si-label">Last Name:</label>
              <input
                className="input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="si-input-container">
              <label className="si-label">Email:</label>
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="si-input-container">
              <label className="si-label">Phone:</label>
              <input
                className="input-phone"
                type="tel"
                value={phone}
                pattern="[0-9]*"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="si-input-container">
              <label className="si-label">University Name:</label>
              <input
                type="text"
                value={universityName}
                className="input"
                onChange={(e) => setUniversityName(e.target.value)}
                required
              />
            </div>
            <div className="si-input-container">
              <label className="si-label">Major:</label>
              <input
                type="text"
                value={major}
                className="input"
                onChange={(e) => setMajor(e.target.value)}
                required
              />
            </div>

            <div className="si-from-to">
              <div className="si-from">
                <label className="">Education Start:</label>
                <input
                  type="date"
                  className="input-number"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>

              <div className="si-to">
                <label className="">Education End:</label>
                <input
                  type="date"
                  className="input-number"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>
              <div className="si-to">
                <label className="si-label">Gpa </label>
                <input
                  type="number"
                  className="input-number"
                  value={gpa}
                  min={0}
                  max={4}
                  step={0.01}
                  onWheel={numberInputOnWheelPreventChange}
                  onChange={(e) => setGpa(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="si-input-container"></div>

            <div className="s-input-container">
              <label className="custom-file-upload" htmlFor="file-upload">
                Upload Your CV
              </label>
              <input
                type="file"
                className="input-file"
                accept="pdf"
                id="file-upload"
                onChange={handleCvChange}
              />
              {cv.link ? (
                <a href={cv.link} target="_blank" rel="noopener noreferrer">
                  Your Current CV
                </a>
              ) : (
                ""
              )}
            </div>
            <button className="si-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
