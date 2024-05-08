import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SnackBar from "../Snackbar/Snackbar";
const theme = createTheme({
  palette: {
    blue: {
      main: "#3C91E6",
    },
    white: {
      main: "#fff",
    },
  },
});
export default function StudentPreviewPostOverlay() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showPreview, setShowPreview] = useState(false); // New state for preview
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    handleClose();
  };

  function showSnackBar() {
    // console.log(55);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          color={"white"}
          style={{ backgroundColor: "#3C91E6" }}
        >
          preview
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"xl"}
          // style={{ paddingBottom: "1px" }}
        >
          <form onSubmit={handleSubmit}>
            {<DialogTitle>Apply now</DialogTitle>}
            <DialogContent>
              {
                // Render preview or input fields based on showPreview
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
                  </div>
                  {/* Render the internship details here */}
                </div>
              }

              {/* Add more TextField components for other fields */}
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                color="blue"
                onClick={showSnackBar}
              >
                Apply now
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
            <SnackBar />
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
