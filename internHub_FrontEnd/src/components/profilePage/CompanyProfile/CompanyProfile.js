import { useState } from "react";
import "./CompanyProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyPost from "../../Posts/CompanyPost/CompanyPost";
import { useUser } from "../../../Contexts/UserContext";
export default function CompanyProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, updateUser } = useUser();
  const [companyName, setCompanyName] = useState(user.data.name);
  const [userType, setUserType] = useState(user.type);
  const [email, setEmail] = useState(user.data.email);
  const [bio, setBio] = useState(user.data.bio);
  const [numEmployees, setNumEmployees] = useState(user.data.numberOfEmployees);
  const [address, setAddress] = useState(user.data.address);
  const [city, setCity] = useState(user.data.city);
  const [country, setCountry] = useState(user.data.country);
  const [logo, setLogo] = useState(
    `http://localhost:8080/files/${user.data.logo}`
  );
  const [phone, setPhone] = useState(user.data.phone);
  const [companySpeciality, setCompanySpeciality] = useState(
    user.data.speciality
  );

  function logout() {
    navigate("/");
  }
  function editProfile() {
    navigate("/companyedit", {});
  }
  function goToHomePage() {
    navigate("/companyhome", {
      state: {
        companyName: companyName,
        userType: userType,
        email: email,
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
          {logo ? (
            <img src={logo} alt="pink" />
          ) : (
            <img
              src={`https://placehold.co/50x50/779900/FFF?text=${companyName}`}
              alt="pink"
            />
          )}
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
