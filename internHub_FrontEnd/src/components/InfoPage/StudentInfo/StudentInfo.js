import React, { useState } from "react";
import "./StudentInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DropDown from "../../DropDownList/DropDown";
import { Phone } from "@mui/icons-material";
import Progressbar from "../../Progressbar/Progressbar";
import StudentAddCertificate from "../../Overlays/StudentAddCertificate/StudentAddCertificate";
import { v4 as uuidv4 } from "uuid";
import ClearIcon from "@mui/icons-material/Clear";
export default function StudentInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [address, setAddress] = useState("");

  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [universityName, setUniversityName] = useState("");

  const [skills, setSkills] = useState(["debugging", "OOP", "clean code"]);

  const [certificates, setCertificate] = useState([]);

  // certification name provider from to
  function handleAddCertificate(certName, provider, f, t) {
    setCertificate([
      ...certificates,
      {
        id: uuidv4(),
        certificateName: certName,
        certificateProvider: provider,
        from: f,
        to: t,
      },
    ]);
  }
  function calculateProgress() {
    const totalFields = 10; // Total number of input fields
    let completedFields = 0;

    if (firstName) completedFields++;

    if (lastName) completedFields++;
    if (bio) completedFields++;
    if (cvLink) completedFields++;
    if (address) completedFields++;
    if (phone) completedFields++;
    if (major) completedFields++;
    if (gpa) completedFields++;
    if (from) completedFields = completedFields + 0.5;
    if (to) completedFields = completedFields + 0.5;
    if (universityName) completedFields++;

    return Math.floor((completedFields / totalFields) * 100);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (major != "")
      navigate("/studentdone", {
        state: {
          userType: location.state.userType,
          username: location.state.username,
          email: location.state.email,

          firstName: firstName,
          lastName: lastName,
          bio: bio,
          cvLink: cvLink,
          phone: phone,
          major: major,
          gpa: gpa,
          universityName: universityName,
          certificates: certificates,

          // certificates: certificates,
          skills: skills,

          address: address,
          from: from,
          to,
        },
      });
    else {
      alert("please enter your major");
    }
    // Handle form submission logic here
    // console.log("Form submitted:", {
    //   firstName,
    //   lastName,
    //   bio,
    //   cvLink,

    //   phone,
    //   major,
    // });
  };

  function logout() {
    navigate("/");
  }
  function handleDeleteCertificate(id) {
    let deletedCertificates = certificates.filter((certificate) => {
      return certificate.id != id;
    });
    setCertificate([...deletedCertificates]);
  }
  return (
    <div className="si-student-info-container">
      <div className="si-black-bg">
        <h2 className="si-logo">InternHub</h2>
        <input
          className="si-logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
      <Progressbar progress={calculateProgress()} />
      <div className="si-white-bg">
        <div className="si-name-and-major">
          <h1 className="si-name"> {location.state.username}</h1>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="input"
            type="text"
            placeholder="Student Major"
          />
        </div>
      </div>
      <hr className="splitter" />

      <div className="si-form-container">
        <div className="si-bio-container">
          <label className="si-label">About Us :</label>
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
                {certificate.certificateName}{" "}
                <span className="si-delete">
                  <ClearIcon
                    onClick={() => {
                      handleDeleteCertificate(certificate.id);
                    }}
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
            <DropDown className="si-list" title={"skills"} />
          </div>
        </div>

        <div className=" right-side">
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

            {/* <div className="si-input-container">
              <label className="si-label">Last Name</label> <br />
              <input
                className="input-number"
                type="number"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div> */}
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

            <div className="si-from-to">
              <div className="si-from">
                <label className="">From </label>
                <input
                  type="number"
                  className="input-number"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>

              <div className="si-to">
                <label className="">To </label>
                <input
                  type="number"
                  className="input-number"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="si-input-container">
              <label className="si-label">Gpa </label>
              <input
                type="number"
                className="input-number"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                required
              />
            </div>

            <div className="s-input-container">
              <label className="custom-file-upload" for="file-upload">
                CV Link:
              </label>
              <input
                type="file"
                value={cvLink}
                className="input-file"
                id="file-upload"
                onChange={(e) => setCvLink(e.target.value)}
              />
            </div>

            <div className="si-input-container">
              <label className="si-label">Address:</label>
              <input
                type="text"
                value={address}
                className="input"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="si-input-container">
              <label className="si-label">Phone:</label> <br />
              <input
                className="input-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
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
