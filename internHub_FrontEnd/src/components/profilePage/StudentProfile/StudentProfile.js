import "./StudentProfile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Email } from "@mui/icons-material";
export default function StudentProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  const [firstName, setFirstName] = useState(location.state.firstName);
  const [lastName, setLastName] = useState(location.state.lastName);
  const [bio, setBio] = useState(location.state.bio);
  const [cvLink, setCvLink] = useState(location.state.cvLink);
  const [address, setAddress] = useState(location.state.address);
  const [email, setEmail] = useState(location.state.email);

  const [phone, setPhone] = useState(location.state.phone);
  const [major, setMajor] = useState(location.state.major);
  const [gpa, setGpa] = useState(location.state.gpa);
  const [from, setFrom] = useState(location.state.from);
  const [to, seTo] = useState(location.state.to);
  const [universityName, setUniversityName] = useState(
    location.state.universityName
  );
  const [certificates, setCertificates] = useState(location.state.certificates);
  const [skills, setSkills] = useState(location.state.skills);

  function logout() {
    navigate("/");
  }

  function editProfile() {
    navigate("/studentedit", {
      state: {
        ...location.state,
      },
    });
  }
  function goToHomePage() {
    navigate("/studenthome", {
      state: {
        ...location.state,
      },
    });
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
                  <div key={certificate.id}>
                    Certification {++counter}
                    {` : ${certificate.certificateName}`}
                  </div>
                ))
              }
            </div>
            {/* <div>certification2 : {certificates[1]}</div> */}
            {/* <div>certification3 : {certificates[2]}</div> */}
          </div>
        </div>
        <div className="sp-right-info">
          <div className="sp-information">
            <h1>Information</h1>
            <div className="sp-email">
              Email address<span>{email}</span>{" "}
            </div>
            <div className="sp-location">
              Location <span>{address}</span>{" "}
            </div>
            <div className="sp-phone">
              Phone number<span>{phone}</span>{" "}
            </div>
            <div className="sp-resume">
              Resume<li>{cvLink}</li>{" "}
            </div>
          </div>

          <hr />
          <div className="sp-skills">
            <h1>Skills</h1>
            <div className="first-row">
              <span>{skills[0]}</span>
              <span>{skills[1]}</span>
              <span>{skills[2]}</span>
            </div>
            <div className="second-row">
              <span>Algorithm</span>
              <span>OOP</span>
              <span>Debugging</span>
            </div>
          </div>
          <hr />
          <div className="sp-languages">
            <h1>Languages</h1>
            <span>Arabic</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
