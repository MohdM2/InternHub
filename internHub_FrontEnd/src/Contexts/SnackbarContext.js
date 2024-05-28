import { createContext, useContext } from "react";
import { useState } from "react";
import SimpleSnackbar from "../components/Snackbar/Snackbar";
let SnackBarContext = createContext([]);
export function SnackbarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  function showSnackBar(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => setOpen(false), 2000);
  }

  return (
    <>
      <SnackBarContext.Provider value={{ showSnackBar }}>
        <SimpleSnackbar open={open} message={message} />
        {children}
      </SnackBarContext.Provider>
    </>
  );
}
export const useSnackBar = () => useContext(SnackBarContext);
