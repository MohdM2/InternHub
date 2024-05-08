import React, { useState } from "react";
import "./CompanyInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Phone } from "@mui/icons-material";
import Progressbar from "../../Progressbar/Progressbar";
function CompanyInfo() {
  const location = useLocation();
  let navigate = useNavigate();
  const [companyName, setCompanyName] = useState(location.state.username);
  const [userType, setUserType] = useState(location.state.userType);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  const [bio, setBio] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [logo, setLogo] = useState("");
  const [phone, setPhone] = useState("");
  const [companySpeciality, setCompanySpeciality] = useState("");

  function calculateProgress() {
    const totalFields = 10; // Total number of input fields
    let completedFields = 0;

    if (companyName) completedFields++;

    if (bio) completedFields++;
    if (numEmployees) completedFields++;
    if (address) completedFields++;
    if (city) completedFields++;
    if (country) completedFields++;
    if (logo) completedFields++;
    if (email) completedFields++;
    if (phone) completedFields++;
    if (companySpeciality) completedFields++;

    return Math.floor((completedFields / totalFields) * 100);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // console.log(companyName);
    // console.log(password);
    // console.log(userType);
    // console.log(email);

    if (companySpeciality != "")
      navigate("/companydone", {
        state: {
          companyName: companyName,
          userType: userType,
          email: email,
          Password: password,
          bio: bio,
          numEmployees: numEmployees,
          address: address,
          city: city,
          country: country,
          logo: logo,
          phone: phone,
          companySpeciality: companySpeciality,
        },
      });
    else {
      alert("please enter a company speciality");
    }
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
      <Progressbar progress={calculateProgress()} />
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
            required
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
                required
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Number of Employees:</label> <br />
              <input
                className="input-number"
                type="number"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
                required
              />
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
                className="input"
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
                className="input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="c-input-container">
              <label className="c-label">Phone:</label> <br />
              <input
                className="input-phone"
                type="tel"
                value={phone}
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
