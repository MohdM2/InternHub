import React, { useEffect, useState } from "react";
import "./CompanyAddNewPostOverlay.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DropDownNewInternShip from "../../DropDownNewInternshipForm/DropDownNewInternShip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PaidUnPaid from "../../PaidUnPaid/PaidUnPaid";
import PlaceIcon from "@mui/icons-material/Place";
import DropDown from "../../DropDownList/DropDown";
import { useUser } from "../../../Contexts/UserContext";
import axios from "axios";
import { Category } from "@mui/icons-material";
import { useSnackBar } from "../../../Contexts/SnackbarContext";
const theme = createTheme({
  palette: {
    blue: {
      main: "#3C91E6",
    },
  },
});
function CompanyAddNewPostOverlay({ submit }) {
  const internShipType = ["Remote", "On-site", "Hybrid"];
  const internShipDuration = ["1 month", "2 months", "3 months", "3-6 months"];
  const [open, setOpen] = useState(false);
  const { user, updateUser } = useUser();
  const [showPreview, setShowPreview] = useState(false); // New state for preview
  const [availableSkills, setAvailableSkills] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [data, setData] = useState({
    title: "",
    category: {},
    type: internShipType[0],
    duration: internShipDuration[0],
    description: "",
    skills: [],
    paid: false,
    salary: 0,
  });
  const { showSnackBar } = useSnackBar();
  useEffect(() => {
    async function fetchData() {
      try {
        const skills = await axios.get("http://localhost:8080/skills", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAvailableSkills(skills.data.data);
        const categories = await axios.get("http://localhost:8080/categories", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAvailableCategories(categories.data.data);
        setData({ ...data, category: categories.data.data[0] });
      } catch (error) {
        alert(error);
        console.log("Error fetching skills:", error);
      }
    }
    fetchData();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setData({
      title: "",
      category: availableCategories[0],
      type: internShipType[0],
      duration: internShipDuration[0],
      description: "",
      skills: [],
      paid: false,
      salary: 0,
    });
    setShowPreview(false);
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (showPreview) {
      try {
        // Assuming you have an API endpoint for creating a new post
        const params = {
          company: user.data,
          name: data.title,
          description: data.description,
          duration: data.duration,
          paid: data.paid,
          salary: data.salary,
          category: data.category,
          onSiteRemote: data.type,
          skills: data.skills,
        };
        console.log(JSON.stringify(params));
        const response = await axios.post(
          "http://localhost:8080/jobs",
          params,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log("Post created successfully:", response.data);
        handleClose();
        submit();
        showSnackBar("Post created successfully");
      } catch (error) {
        alert("Error submitting post: " + error.message);
        console.error("Error submitting post:", error);
      }
    } else {
      setShowPreview(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button className="input" variant="contained" onClick={handleClickOpen}>
          Post an Internship
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"xl"}
          // style={{ paddingBottom: "1px" }}
        >
          <form onSubmit={handleSubmit}>
            {!showPreview && <DialogTitle>Add a New Internship</DialogTitle>}
            <DialogContent>
              {!showPreview && (
                <DialogContentText>
                  Please provide the details for the new internship.
                </DialogContentText>
              )}

              {showPreview ? ( // Render preview or input fields based on showPreview
                <div className="canp-details-container">
                  <h1 className="canp-title">{data.title}</h1>
                  <div className="canp-preview-details">
                    <div className="canp-img">
                      <img
                        src={`http://localhost:8080/files/${user.data.logo}`}
                        style={{ maxWidth: "100px" }}
                        alt="company img"
                      />
                    </div>
                    <div className="canp-text">
                      <h5>{user.data.name}</h5>
                      <div className="canp-boxes">
                        <span>{data.category.name}</span>
                        <span>{data.type}</span>
                        <span>{data.duration}</span>
                        <span>
                          {data.paid ? `${data.salary} JOD` : "Unpaid"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="canp-about">
                    <h1>Description</h1>
                    <p style={{ whiteSpace: "pre-wrap" }}>{data.description}</p>
                    <h1 style={{ marginTop: "30px" }}>Required Skills</h1>
                    <p className="canp-skills">
                      {data.skills.map((s) => (
                        <span>{s.name}</span>
                      ))}
                    </p>
                  </div>
                  {/* Render the internship details here */}
                </div>
              ) : (
                <div className="canp-container">
                  <div className="canp-left-side">
                    <div className="canp-div">
                      <TextField
                        className="canp-field"
                        margin="dense"
                        id="jobTitle"
                        name="jobTitle"
                        label="Internship Title"
                        required
                        value={data.title}
                        onChange={(e) =>
                          setData({ ...data, title: e.target.value })
                        }
                      />
                    </div>

                    <div className="canp-div">
                      <DropDownNewInternShip
                        className="canp-field"
                        title="Internship Category"
                        data={availableCategories.map((c) => c.name)}
                        value={data.category.name}
                        change={(e) =>
                          setData({
                            ...data,
                            category: availableCategories.find(
                              (c) => c.name === e.target.value
                            ),
                          })
                        }
                      />
                    </div>

                    <div className="canp-div">
                      <DropDownNewInternShip
                        className="canp-field"
                        title="Internship Type"
                        data={internShipType}
                        value={data.type}
                        change={(e) =>
                          setData({ ...data, type: e.target.value })
                        }
                      />
                    </div>

                    <div className="canp-div">
                      <DropDownNewInternShip
                        data={internShipDuration}
                        title="Internship Duration"
                        className="canp-field"
                        value={data.duration}
                        change={(e) =>
                          setData({ ...data, duration: e.target.value })
                        }
                      />
                    </div>

                    <div className="canp-div">
                      <TextField
                        className="canp-field"
                        margin="dense"
                        id="jobDescription"
                        name="jobDescription"
                        label="Job Description"
                        multiline
                        rows={4}
                        required
                        value={data.description}
                        onChange={(e) =>
                          setData({ ...data, description: e.target.value })
                        }
                      />
                    </div>
                    <div className="canp-div">
                      <DropDown
                        multiple={true}
                        title="skills"
                        data={availableSkills}
                        selectedData={data.skills}
                        change={(v) => setData({ ...data, skills: v })}
                      />
                    </div>

                    <div className="canp-div">
                      <PaidUnPaid
                        value={{ paid: data.paid, salary: data.salary }}
                        change={(v) =>
                          setData({ ...data, paid: v.paid, salary: v.salary })
                        }
                        // change={(v) => console.log(v)}
                      />
                    </div>
                  </div>
                  <div className="canp-right-side">
                    <div className="canp-tips">
                      <h1>Tips for creating the best internship offer</h1>
                      <p>
                        <span> Clear Job Title and Description:</span> Use a
                        descriptive and specific job title that accurately
                        reflects the role. Provide a clear and concise
                        description of the internship responsibilities,
                        qualifications, and expectations.
                      </p>
                      <p>
                        <span> Highlight Benefits and Opportunities:</span>{" "}
                        Showcase what makes your internship unique. Mention any
                        learning opportunities, mentorship programs, networking
                        events, or potential for growth within the company.
                      </p>
                      <p>
                        <span> Requirements and Qualifications:</span> Clearly
                        outline the qualifications, skills, and experience
                        required for the internship. Be transparent about any
                        specific prerequisites or expectations.
                      </p>
                      <p>
                        <span> Engaging and Authentic Tone:</span> Write in a
                        friendly and engaging tone that resonates with your
                        target audience. Avoid using jargon or overly formal
                        language, and try to inject some personality into the
                        post.
                      </p>
                      <p>
                        <span>Company Culture and Values:</span> Showcase your
                        company's culture, mission, and values, along with
                        attractive perks and amenities.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Add more TextField components for other fields */}
            </DialogContent>
            <DialogActions>
              {showPreview ? (
                <Button onClick={() => setShowPreview(false)}>Edit</Button>
              ) : (
                ""
              )}
              {showPreview ? (
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              ) : (
                <Button type="submit" variant="contained">
                  Preview
                </Button>
              )}
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default CompanyAddNewPostOverlay;
