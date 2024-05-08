import React, { useState } from "react";
import "./StudentEdit.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DropDown from "../../DropDownList/DropDown";
export default function StudentEdit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(location.state.firstName);
  const [lastName, setLastName] = useState(location.state.lastName);
  const [bio, setBio] = useState(location.state.bio);
  const [cvLink, setCvLink] = useState("");
  const [address, setAddress] = useState(location.state.address);

  const [phone, setPhone] = useState(location.state.phone);
  const [major, setMajor] = useState(location.state.major);
  const [gpa, setGpa] = useState(location.state.gpa);
  const [from, setFrom] = useState(location.state.from);
  const [to, setTo] = useState(location.state.to);
  const [universityName, setUniversityName] = useState(
    location.state.universityName
  );
  const [certificates, setCertificates] = useState([
    "Java Developer",
    "UI design",
  ]);
  const [skills, setSkills] = useState(["debugging", "OOP", "clean code"]);

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/studentprofile", {
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
        skills: skills,

        address: address,
        from: from,
        to: to,
      },
    });
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
            <DropDown className="si-list" />
          </div>
          <div className="si-dropdown-container">
            <label className="si-label">Skills </label>
            <DropDown className="si-list" />
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
              />
            </div>
            <div className="si-input-container">
              <label className="si-label">Last Name:</label>
              <input
                className="input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                />
              </div>

              <div className="si-to">
                <label className="">To </label>
                <input
                  type="number"
                  className="input-number"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
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
              />
            </div>

            <div className="si-input-container">
              <label className="si-label">Phone:</label> <br />
              <input
                className="input-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
