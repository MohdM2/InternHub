import "./CompanyEdit.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Phone } from "@mui/icons-material";
export default function CompanyEdit() {
  const location = useLocation();
  let navigate = useNavigate();
  const [companyName, setCompanyName] = useState(location.state.companyName);
  const [userType, setUserType] = useState(location.state.userType);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  const [bio, setBio] = useState(location.state.bio);
  const [numEmployees, setNumEmployees] = useState(location.state.numEmployees);
  const [address, setAddress] = useState(location.state.address);
  const [city, setCity] = useState(location.state.city);
  const [country, setCountry] = useState(location.state.country);
  const [logo, setLogo] = useState(location.state.logo);
  const [phone, setPhone] = useState(location.state.phone);
  const [companySpeciality, setCompanySpeciality] = useState(
    location.state.companySpeciality
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(phone);
    // console.log(password);
    // console.log(userType);
    // console.log(email);

    navigate("/companyprofile", {
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
          <h1 className="c-name"> {location.state.companyName}</h1>
          <input
            value={companySpeciality}
            onChange={(e) => setCompanySpeciality(e.target.value)}
            className="input"
            type="text"
            placeholder={"company speciality"}
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
