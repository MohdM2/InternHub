import { createContext } from "react";

export const SignUpFormContext = createContext({
  username: "",
  userType: "",
  password: "",
  email: "",
});
