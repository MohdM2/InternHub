import React, { useState } from "react";
import "./CompanyInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function CompanyInfo() {
  const location = useLocation();
  let navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [bio, setBio] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [logo, setLogo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companySpeciality, setCompanySpeciality] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      companyName,
      bio,
      numEmployees,
      address,
      city,
      country,
      logo,
      email,
      phone,
      companySpeciality,
    });
  };
  //log out function
  function logout() {
    navigate("/");
  }
  // Function to handle logo file selection
  const handleLogoChange = (event) => {
    // const file = event.target.files[0];
    // setLogo(file);
    // console.log(file.name);
    setLogo(event.target.value);
  };

  return (
    <div className="c-company-info-container">
      <div className="c-black-bg">
        <h2 className="c-logo">InternHub</h2>
        <input
          className="c-logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
      <div className="c-white-bg">
        <div className="c-name-and-major">
          <div className="c-photo-container">
            <label for="file-upload">
              {" "}
              <AddCircleOutlineIcon className="c-add" />
            </label>
            <input
              type="file"
              className="input"
              id="file-upload"
              accept="image/*" // Restrict file selection to images
              onChange={handleLogoChange} // Call handleLogoChange function on file selection
            />
          </div>
          <h1 className="c-name"> {location.state.username}</h1>
          <input
            value={companySpeciality}
            onChange={(e) => setCompanySpeciality(e.target.value)}
            className="input"
            type="text"
            placeholder="company speciality"
          />
        </div>
      </div>
      <hr className="splitter" />

      <div className="c-form-container">
        <div className="c-bio-container">
          <label className="c-label">About Us :</label>
          <textarea
            className="c-textarea"
            value={bio}
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
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Number of Employees:</label> <br />
              <input
                className="input-number"
                type="number"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
              />
            </div>
            <div className="c-input-container">
              <label className="c-label">Address:</label>
              <input
                type="text"
                value={address}
                className="input"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Country:</label>
              <input
                className="input"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="c-input-container">
              <label className="c-label">City:</label>
              <input
                type="text"
                className="input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Phone:</label> <br />
              <input
                className="input-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
