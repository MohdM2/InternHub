import React, { useState } from "react";
import "./StudentInfo.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function StudentInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [cvLink, setCvLink] = useState("");

  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      firstName,
      lastName,
      bio,
      cvLink,

      phone,
      major,
    });
  };

  function logout() {
    navigate("/");
  }
  return (
    <div className="s-student-info-container">
      <div className="s-black-bg">
        <h2 className="s-logo">InternHub</h2>
        <input
          className="s-logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
      <div className="s-white-bg">
        <div className="s-name-and-major">
          <h1 className="s-name">{location.state.username}</h1>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="input"
            type="text"
            placeholder="major"
          />
        </div>
      </div>

      <div className="s-form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="s-input-container">
            <label className="s-label">First Name:</label>
            <input
              type="text"
              className="input"
              value={firstName}
              placeholder={location.state.username}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="s-input-container">
            <label className="s-label">Last Name:</label>
            <input
              type="text"
              value={lastName}
              className="input"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="s-input-container">
            <label className="s-label">Phone:</label>
            <input
              type="text"
              value={phone}
              className="input"
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="s-input-container-textarea">
            <label className="s-textarea-label">About me</label>
            <textarea
              value={bio}
              className="s-textarea"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <button className="s-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
