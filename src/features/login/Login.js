import React, { useState } from "react";
import "./style.css";

import { SignUpForm } from "../../component/SignUpFrom";
import { LoginForm } from "../../component/LoginForm";
import SnackbarComponent from "../../component/Snackbar";

export const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("")

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <SnackbarComponent open={open} handleClose={handleClose} title={title} />
      <LoginForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
      />
      <SignUpForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setOpenSnackBar={setOpen}
        setTitle={setTitle}
      />
    </>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
