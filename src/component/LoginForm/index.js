import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import background from "../../assets/10808.jpg";
import { Button, Checkbox, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AlertComponent } from "../Alert";

// async function loginUser(credentials) {
//   return fetch("http://localhost:3002/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export const LoginForm = ({ loginForm, setLoginForm, data }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password,
    // });
    // setToken(token);
  };
  return (
    <>
      <div className={loginForm ? "login-wrapper" : "login-wrapper-hide"}>
        <div className="login-form">
          <div style={{ width: "70%", alignSelf: "center" }}>
            <h1>WELCOME BACK</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <p>Username</p>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <p>Password</p>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  size="small"
                  placeholder="Enter username"
                  type={"password"}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span>Remember me</span>
                  <Checkbox />
                </div>
                <div style={{ cursor: "pointer" }}>Forgot password</div>
              </div>
              <div>
                <Button color="primary" fullWidth variant="contained">
                  Sign in
                </Button>
              </div>
              <br />
              <div>
                <Button startIcon={<GoogleIcon />} fullWidth variant="outlined">
                  Sign in with Google
                </Button>
              </div>
              <br />
              <div style={{ alignItems: "center" }}>
                <span>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setLoginForm(false)}
                    style={{ cursor: "pointer", color: "#1565C0" }}
                  >
                    Sign up
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="background">
          <img style={{ width: "100%" }} src={background} alt="login" />
          {/* ÁD */}
        </div>
      </div >
    </>
  );
};

LoginForm.propTypes = {
  setLoginForm: PropTypes.func,
  loginForm: PropTypes.bool,
};
