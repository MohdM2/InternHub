import React, { useState } from "react";
import "./CompanyInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Progressbar from "../../Progressbar/Progressbar";
import { useUser } from "../../../Contexts/UserContext";
import axios from "axios";
import NavBar from "../../Nav/NavBar";
function CompanyInfo() {
  const employeeCategories = [
    "1-10",
    "11-50",
    "51-100",
    "101-500",
    "501-1000",
    "1001+",
  ];
  let navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [companyName, setCompanyName] = useState(user.data.name || "");
  const [email, setEmail] = useState(user.data.email || "");
  const [bio, setBio] = useState(user.data.bio || "");
  const [numEmployees, setNumEmployees] = useState(
    user.data.numberOfEmployees || ""
  );
  const [address, setAddress] = useState(user.data.address || "");
  const [city, setCity] = useState(user.data.city || "");
  const [country, setCountry] = useState(user.data.country || "");
  const [logo, setLogo] = useState({
    file: null,
    link: user.data.logo
      ? `http://localhost:8080/files/${user.data.logo}`
      : null,
  });
  const [phone, setPhone] = useState(user.data.phone || "");
  const [companySpeciality, setCompanySpeciality] = useState(
    user.data.speciality || ""
  );
  function calculateProgress() {
    const totalFields = 9; // Total number of input fields
    let completedFields = 0;

    if (companyName) completedFields++;
    if (bio) completedFields++;
    if (numEmployees) completedFields++;
    if (address) completedFields++;
    if (city) completedFields++;
    if (country) completedFields++;
    if (phone) completedFields++;
    if (logo.file || logo.link) completedFields++;
    if (companySpeciality) completedFields++;

    return Math.floor((completedFields / totalFields) * 100);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (calculateProgress() < 100) {
      alert("Please fill all fields to continue");
      return;
    }
    try {
      const data = new FormData();
      data.append("name", companyName);
      data.append("country", country);
      data.append("city", city);
      data.append("email", email);
      data.append("address", address);
      data.append("phone", phone);
      data.append("bio", bio);
      data.append("speciality", companySpeciality);
      data.append("numberOfEmployees", numEmployees);
      if (logo.file) data.append("logoFile", logo.file);
      const response = await axios.put(
        `http://localhost:8080/companies/${user.data.id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to form-data
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      updateUser({ ...user, data: response.data.data });
    } catch (e) {
      alert(e.response.data.error);
    }
    navigate("/companydone", {});
  };
  // Function to handle logo file selection
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo({ file, link: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="c-company-info-container">
      <NavBar />
      <Progressbar progress={calculateProgress()} />
      <div className="c-white-bg">
        <div className="c-name-and-major">
          <div className="c-photo-container">
            <label htmlFor="file-upload">
              {logo.link ? (
                <img src={logo.link} className="logo" />
              ) : (
                <AddCircleOutlineIcon className="c-add" />
              )}
            </label>
            <input
              type="file"
              className="input"
              id="file-upload"
              accept="image/*" // Restrict file selection to images
              onChange={handleLogoChange} // Call handleLogoChange function on file selection
            />
          </div>
          <h1 className="c-name"> {companyName}</h1>
          <h2 className="c-speciality"> {companySpeciality}</h2>
        </div>
      </div>
      <hr className="splitter" />

      <div className="c-form-container">
        <div className="c-bio-container">
          <label className="c-label">About Us :</label>
          <textarea
            className="c-textarea"
            value={bio}
            required
            placeholder=" let's get to know you better"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        <div className=" right-side">
          <h1>Information</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="c-input-container">
              <label className="c-label">Company Name:</label>
              <input
                className="input"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="c-input-container">
              <label className="c-label">Company Speciality:</label>
              <input
                value={companySpeciality}
                onChange={(e) => setCompanySpeciality(e.target.value)}
                className="input"
                type="text"
                required
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Number of Employees:</label>
              <select
                className="input-number"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
                required
              >
                {employeeCategories.map((c) => (
                  <option value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="c-input-container">
              <label className="c-label">Address:</label>
              <input
                type="text"
                value={address}
                className="input"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Country:</label>
              <input
                className="input small"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="c-input-container">
              <label className="c-label">City:</label>
              <input
                type="text"
                className="input small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Phone:</label>
              <input
                className="input small"
                type="text"
                value={phone}
                pattern="[0-9]*"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button className="c-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
