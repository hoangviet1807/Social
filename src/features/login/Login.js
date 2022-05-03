import React, { useState } from "react";
import "./style.css";

import { SignUpForm } from "../../component/SignUpFrom";
import { LoginForm } from "../../component/LoginForm";
import { Alert, Button, Snackbar } from "@mui/material";
import { useQuery } from "react-query";
import { fetchUsers } from "../../services/services";

// async function loginUser(credentials) {
//   return fetch("http://localhost:3002/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export const Login = () => {
  const { data } = useQuery("users", fetchUsers);
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const SnackbarComponent = () => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Create successfully
        </Alert>
      </Snackbar>
    );
  };

  return (
    <>
      {SnackbarComponent()}
      <LoginForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        data={data}
      />
      <SignUpForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setOpenSnackBar={setOpen}
        data={data}
      />
    </>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
