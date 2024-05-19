import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
export default function StudentAddCertificate({ addCertificate }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let [certificate, setCertificate] = useState("");
  let [certificateProvider, setCertificateProvider] = useState("");
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");

  function handleAddCertificate() {
    if (certificate && certificateProvider && from && to)
      addCertificate(certificate, certificateProvider, from, to);
    setCertificate("");
    setCertificateProvider("");
    setFrom("");
    setTo("");
    setOpen(false);
  }
  return (
    <React.Fragment>
      <Button
        style={{ backgroundColor: "#3c91e6", fontFamily: "Kanit" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Add a certificate
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle
          style={{
            color: "#3c91e6",
            fontFamily: "Kanit",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Add Certification
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add certificate name , provider , from-to date
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="certificate"
            label="Certification name"
            type="text"
            fullWidth
            variant="standard"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="provider"
            name="provider"
            label="provider name"
            type="text"
            fullWidth
            variant="standard"
            value={certificateProvider}
            onChange={(e) => setCertificateProvider(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="from"
            name="from"
            label="from"
            type="date"
            fullWidth
            variant="standard"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="to"
            name="to"
            label="to"
            type="date"
            P
            fullWidth
            variant="standard"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleAddCertificate}>
            Add Certification
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
