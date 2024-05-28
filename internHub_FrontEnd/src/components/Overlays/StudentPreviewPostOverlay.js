import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUser } from "../../Contexts/UserContext";
import { useSnackBar } from "../../Contexts/SnackbarContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
export default function StudentPreviewPostOverlay({ data, submit }) {
  const [open, setOpen] = React.useState(false);
  const { user } = useUser();
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const params = {
        student: user.data,
        job: data,
      };
      const response = await axios.post(
        "http://localhost:8080/applications",
        params,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      submit();
      showSnackBar("Application sumbitted successfully");
      handleClose();
    } catch (error) {
      alert("Error submitting post: " + error.message);
      console.error("Error submitting post:", error);
    }
  };

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
                  <h1 className="canp-title">{data.name}</h1>
                  <div className="canp-preview-details">
                    <div className="canp-img">
                      <img
                        src={`http://localhost:8080/files/${data.company.logo}`}
                        style={{ maxWidth: "100px" }}
                        alt="company img"
                      />
                    </div>
                    <div className="canp-text">
                      <h5
                        className="clickable"
                        onClick={() =>
                          navigate(`/companyprofile/${data.company.id}`)
                        }
                      >
                        {data.company.name}
                      </h5>
                      <div className="canp-boxes">
                        <span>{data.category.name}</span>
                        <span>{data.onSiteRemote}</span>
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
              }

              {/* Add more TextField components for other fields */}
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                backgroundColor="blue"
                onClick={handleSubmit}
              >
                Apply now
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
