import { useState } from "react";
import "./CompanyProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
export default function CompanyProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [companyName, setCompanyName] = useState(location.state.companyName);
  const [userType, setUserType] = useState(location.state.userType);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  const [bio, setBio] = useState(location.state.bio);
  const [numEmployees, setNumEmployees] = useState(location.state.numEmployees);
  const [address, setAddress] = useState(location.state.address);
  const [city, setCity] = useState(location.state.city);
  const [country, setCountry] = useState(location.state.country);
  const [logo, setLogo] = useState("");
  const [phone, setPhone] = useState(location.state.phone);
  const [companySpeciality, setCompanySpeciality] = useState(
    location.state.companySpeciality
  );

  function logout() {
    navigate("/");
  }
  function editProfile() {
    navigate("/companyedit", {
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
  }
  function goToHomePage() {
    navigate("/companyhome", {
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
  }
  return (
    <div className="cp-container">
      <div className="cp-black-bg">
        <h2 className="cp-logo" onClick={goToHomePage}>
          InternHub
        </h2>
        <input
          className="cp-logout"
          type="submit"
          value="logout"
          onClick={logout}
        />
      </div>
      <div className="cp-white-bg">
        <div className="cp-name-and-major">
          <img
            src={`https://placehold.co/50x50/779900/FFF?text=${companyName}`}
            alt="pink"
          />
          <h1 className="cp-name">{companyName}</h1>
          <h2 className="cp-major">{companySpeciality}</h2>
        </div>
        <div className="cp-editprofile">
          <input
            className="input"
            type="submit"
            value={"edit profile"}
            onClick={editProfile}
          />
        </div>
      </div>
      <div className="cp-info-content">
        <div className="cp-left-info">
          <div className="cp-aboutus">
            <h1>About us</h1>
            <p>{bio}</p>
          </div>
        </div>
        <div className="cp-right-info">
          <div className="cp-information">
            <h1>Information</h1>
            <div className="cp-email">
              Email address<span>{email}</span>{" "}
            </div>
            <div className="cp-location">
              Location <span>{address}</span>{" "}
            </div>
            <div className="cp-phone">
              Phone number<span>{phone}</span>{" "}
            </div>
            <div className="cp-website">
              website
              <a
                href={`https://www.${companyName}.com`}
                target="_blank"
              >{`www.${companyName}.com`}</a>{" "}
            </div>
            <div className="cp-employeesnumber">
              Number of Employees <span>{numEmployees}</span>{" "}
            </div>
          </div>

          <hr />
          {/* I should make a seperated component here */}
          <div className="cp-internships">
            <h1>Recent internships</h1>
            <div className="cp-posts-container">
              <CompanyPost
                details={{
                  companyName: companyName,
                  country: country,
                  city: city,
                }}
              />
              {/* <CompanyPost />
              <CompanyPost /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
