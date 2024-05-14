import React, { useState } from "react";
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
const theme = createTheme({
  palette: {
    blue: {
      main: "#3C91E6",
    },
  },
});
function CompanyAddNewPostOverlay() {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // New state for preview

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    handleClose();
  };

  const internShipType = ["remote", "on-site", "Hybrid"];
  const internShipDuration = ["1-month", "2-months", "3-months", "3-6 months"];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          className="input"
          variant="contained"
          onClick={handleClickOpen}
          color="blue"
        >
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
                  {/* Display the entered information */}

                  <h1 className="canp-title">Backend Developer</h1>
                  <div className="canp-preview-details">
                    <div className="canp-img">
                      <img
                        src="https://placehold.co/100x100/0ed77a/green"
                        alt="company img"
                      />
                    </div>
                    <div className="canp-text">
                      <h5>progress soft</h5>
                      <h6>
                        <PlaceIcon style={{ fontSize: "15px" }} /> Amman -
                        Jordan
                      </h6>
                      <div className="canp-boxes">
                        <span>On-site</span>
                        <span>3-6 months</span>
                        <span>150 JD</span>
                      </div>
                    </div>
                  </div>
                  <div className="canp-about">
                    <h1>my role</h1>
                    <p>
                      We’re searching for stand-out candidates who want to work
                      in—and learn tons about—one of the following fields:
                      Backend software engineering Data engineering
                      Infrastructure engineering Mobile software engineering
                      Security & privacy engineering Don’t worry if you’re not
                      sure what area you’d like to work in just yet: We can take
                      the time to chat about your interests and work out what’s
                      likely to be the best fit for you. And when you apply for
                      a job at Bending Spoons, we consider you for every
                      suitable open position.
                    </p>
                    <h1 style={{ marginTop: "30px" }}>Qualifications</h1>
                    <p>
                      Bachelor’s degree in Computer Science, Engineering or any
                      related field. Proven working experience in Java
                      development. Object oriented analysis and design using
                      common design patterns. Experience in Spring framework and
                      its related technologies.
                    </p>
                    <h1 style={{ marginTop: "30px" }}>responsibilities</h1>
                    <p>
                      Contribute to all phases of the development life cycle.
                      Write well-designed, testable and efficient code. Ensure
                      that designs comply with the specifications. Support
                      continuous improvement by investigating alternatives and
                      technologies and presenting these for architectural
                      review.
                    </p>
                    <h1 style={{ marginTop: "30px" }}>Skills</h1>
                    <p className="canp-skills">
                      <span> Debugging </span>
                      <span> clean code </span>
                      <span> OOP </span>
                      <span> Excel </span>
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
                      />
                    </div>

                    <div className="canp-div">
                      <DropDownNewInternShip
                        details={{
                          myArr: internShipType,
                          labelName: "Internship type",
                        }}
                        className="canp-field"
                      />
                    </div>

                    <div className="canp-div">
                      <DropDownNewInternShip
                        details={{
                          myArr: internShipDuration,
                          labelName: "Internship duration",
                        }}
                        className="canp-field"
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
                      />
                    </div>
                    <div className="canp-div">
                      <DropDown title="skills" />
                    </div>

                    <div className="canp-div">
                      <PaidUnPaid />
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
                <Button onClick={() => setShowPreview(true)}>Preview</Button>
              )}
              <Button type="submit" variant="contained" color="blue">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default CompanyAddNewPostOverlay;
