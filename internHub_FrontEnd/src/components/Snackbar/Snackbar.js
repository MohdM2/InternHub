import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SimpleSnackbar({ open, message }) {
  console.log("indside snack");
  return <Snackbar open={open} autoHideDuration={6000} message={message} />;
}
