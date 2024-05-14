import "./StudentProfile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Email } from "@mui/icons-material";
import { useUser } from "../../../Contexts/UserContext";
export default function StudentProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, updateUser } = useUser();
  const [firstName, setFirstName] = useState(user.data.firstName);
  const [lastName, setLastName] = useState(user.data.lastName);
  const [bio, setBio] = useState(user.data.bio);
  const [cvLink, setCvLink] = useState(
    `http://localhost:8080/files/${user.data.cv}`
  );
  const [email, setEmail] = useState(user.data.email);

  const [phone, setPhone] = useState(user.data.phone);
  const [major, setMajor] = useState(user.data.major);
  const [gpa, setGpa] = useState(user.data.gpa);
  const [from, setFrom] = useState(user.data.educationStartDate);
  const [to, seTo] = useState(user.data.educationEndDate);
  const [universityName, setUniversityName] = useState(user.data.university);
  const [certificates, setCertificates] = useState(user.data.courses);
  const [skills, setSkills] = useState(user.data.skills);

  function logout() {
    navigate("/");
  }

  function editProfile() {
    navigate("/studentedit", {});
  }
  function goToHomePage() {
    navigate("/studenthome", {});
  }
  let counter = 0;
  return (
    <div className="sp-container">
      <div className="sp-black-bg">
        <h2 className="sp-logo" onClick={goToHomePage}>
          InternHub
        </h2>
        <input
          className="sp-logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
      <div className="sp-white-bg">
        <div className="sp-name-and-major">
          <h1 className="sp-name">
            {firstName} {lastName}
          </h1>
          <h2 className="sp-major">{major}</h2>
        </div>
        <div className="sp-editprofile">
          <input
            className="input"
            type="submit"
            value={"edit profile"}
            onClick={editProfile}
          />
        </div>
      </div>
      <div className="sp-info-content">
        <div className="sp-left-info">
          <div className="sp-aboutme">
            <h1>About me</h1>
            <p>{bio}</p>
          </div>
          <hr />
          <div className="sp-education">
            <h1>Education</h1>
            <h3>{universityName}</h3>
            <span className="sp-from">{from}</span>{" "}
            <span className="sp-to"> - {to}</span>{" "}
            <div className="sp-gpa">
              Gpa : <span> {gpa}</span>{" "}
            </div>
          </div>
          <hr />
          <div className="sp-certifications">
            <h1>Certifications ({certificates.length}) </h1>
            <div>
              {
                // certificates[0].certificateName

                certificates.map((certificate) => (
                  <div className="sp-education" key={certificate.id}>
                    <h3>{`${certificate.name} - ${certificate.provider}`}</h3>
                    <span className="sp-from">
                      {certificate.startDate}
                    </span>{" "}
                    <span className="sp-to"> - {certificate.endDate}</span>{" "}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="sp-right-info">
          <div className="sp-information">
            <h1>Information</h1>
            <div className="sp-email">
              Email address<span>{email}</span>{" "}
            </div>
            <div className="sp-phone">
              Phone number<span>{phone}</span>{" "}
            </div>
            <div className="sp-resume">
              Resume
              <span>
                <a href={cvLink}>Download Resume</a>
              </span>
            </div>
          </div>

          <hr />
          <div className="sp-skills">
            <h1>Skills</h1>
            <div className="skills">
              {skills.map((skill) => (
                <span>{skill.name}</span>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
