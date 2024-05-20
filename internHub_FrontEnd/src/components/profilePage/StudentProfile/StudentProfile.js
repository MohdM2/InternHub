import "./StudentProfile.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../../../Contexts/UserContext";
import NavBar from "../../Nav/NavBar";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function StudentProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, updateUser } = useUser();
  const [student, setStudent] = useState({ courses: [], skills: [] });
  console.log(student);
  useEffect(() => {
    async function fetchData() {
      try {
        let currentStudent = null;
        if (id === user.id) currentStudent = user.data;
        else
          currentStudent = (
            await axios.get(`http://localhost:8080/students/${id}`, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
          ).data.data;
        setStudent({ ...student, ...currentStudent });
      } catch (e) {
        alert(e);
        console.log(e);
      }
    }
    fetchData();
  }, []);

  function editProfile() {
    navigate("/studentedit");
  }

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36d7b7");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return loading ? (
    <ClimbingBoxLoader
      color={color}
      loading={loading}
      size={20}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translateXY(-50%,-50%)",
      }}
    />
  ) : (
    <>
      <div className="sp-container">
        <NavBar showHomeButton={true} showBackButton={true} />
        <div className="sp-white-bg">
          <div className="sp-name-and-major">
            <h1 className="sp-name">
              {student.firstName} {student.lastName}
            </h1>
            <h2 className="sp-major">{student.major}</h2>
          </div>
          <div className="sp-editprofile">
            {student.id === user.data.id ? (
              <input
                className="input"
                type="submit"
                value={"edit profile"}
                onClick={editProfile}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="sp-info-content">
          <div className="sp-left-info">
            <div className="sp-aboutme">
              <h1>About me</h1>
              <p>{student.bio}</p>
            </div>
            <hr />
            <div className="sp-education">
              <h1>Education</h1>
              <h3>{student.university}</h3>
              <span className="sp-from">{student.educationStartDate}</span>{" "}
              <span className="sp-to"> - {student.educationEndDate}</span>{" "}
              <div className="sp-gpa">
                Gpa : <span> {student.gpa}</span>{" "}
              </div>
            </div>
            <hr />
            <div className="sp-certifications">
              <h1>Certifications {`(${student.courses.length})`} </h1>
              <div>
                {student.courses.map((course) => (
                  <div className="sp-education" key={course.id}>
                    <h3>{`${course.name} - ${course.provider}`}</h3>
                    <span className="sp-from">{course.startDate}</span>
                    <span className="sp-to"> - {course.endDate}</span>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sp-right-info">
            <div className="sp-information">
              <h1>Information</h1>
              <div className="sp-email">
                Email address<span>{student.email}</span>{" "}
              </div>
              <div className="sp-phone">
                Phone number<span>{student.phone}</span>{" "}
              </div>
              <div className="sp-resume">
                Resume
                <span>
                  <a href={`http://localhost:8080/files/${student.cv}`}>
                    Download Resume
                  </a>
                </span>
              </div>
            </div>

            <hr />
            <div className="sp-skills">
              <h1>Skills</h1>
              <div className="skills">
                {student.skills.map((skill) => (
                  <span>{skill.name}</span>
                ))}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
