import React, { useEffect, useState } from "react";
import "./style.css";
import { SignUpForm } from "../../component/SignUpFrom";
import { LoginForm } from "../../component/LoginForm";
import SnackbarComponent from "../../component/Snackbar";
import useToken from "../../app/useToken";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("")
  const { token, setToken } = useToken()

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    if(token){
      navigate('/homepage')
    }
  },[navigate, token])


  return (
    <>
      <SnackbarComponent open={open} handleClose={handleClose} title={title} />
      <LoginForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setToken={setToken}
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
