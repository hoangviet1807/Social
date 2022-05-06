import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import background from "../../assets/10808.jpg";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { createUser } from "../../services/services";

export const SignUpForm = ({
  loginForm,
  setLoginForm,
  setOpenSnackBar,
  data,
}) => {
  const queryClient = useQueryClient()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkUser, setCheckUser] = useState(true);
  const [helpTextUserName, setHelpTextUserName] = useState("");
  const [checkPasswordConfirm, setCheckPasswordConfirm] = useState(true);
  const [helpTextPassword, setHelpTextPassword] = useState("");
  const [helpTextPasswordConfirm, setHelpTextPasswordConfirm] = useState("");

  const { mutate } = useMutation(createUser, {
    onSuccess: () => {
      setOpenSnackBar(true);
      setLoginForm(true);
      queryClient.invalidateQueries('users', { exact: true })
    },
    onError: () => {
      setCheckUser(false)
      setHelpTextUserName("Username already exist")
    }
  });


  const handleSubmit = (e) => {
    setCheckPassword(true);
    setCheckPasswordConfirm(true);
    setHelpTextPassword("");
    setHelpTextPasswordConfirm("");
    if (password.length < 8) {
      setCheckPassword(false);
      setHelpTextPassword("Password must be at least 8 characters long");
      return false;
    }
    if (password !== passwordConfirm) {
      setCheckPasswordConfirm(false);
      setHelpTextPasswordConfirm("Please make sure your password match");
      return false;
    }
    const user = {
      username: username,
      password: password,
      name: username,
    };
    mutate(user)



  };

  const handleSwitch = () => {
    setLoginForm(true);
    setUserName("");
    setPassword("");
    setPasswordConfirm("");
    setCheckPassword(true);
    setCheckPasswordConfirm(true);
    setCheckUser(true);
    setHelpTextPassword("");
    setHelpTextPasswordConfirm("");
    setHelpTextUserName("");
  };

  return (
    <form>
      <div className={!loginForm ? "signup-wrapper" : "signup-wrapper-hide"}>
        <div className="background">
          <img style={{ width: "100%" }} src={background} alt="login" />
          {/* ád */}
        </div>
        <div className="signup-form">
          <div style={{ width: "70%", alignSelf: "center" }}>
            <h1>Sign up</h1>
            <div>
              <span>
                Already have an account?{" "}
                <span
                  onClick={handleSwitch}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Sign in
                </span>
              </span>
            </div>

            <div>
              <p>Username</p>
              <TextField
                value={username}
                fullWidth
                size="small"
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
                helperText={helpTextUserName}
                error={!checkUser ? true : false}
              />
            </div>
            <div>
              <p>Password</p>
              <TextField
                value={password}
                error={!checkPassword ? true : false}
                fullWidth
                size="small"
                placeholder="Enter password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                helperText={helpTextPassword}
              />
            </div>
            <div>
              <p>Confirm Password</p>
              <TextField
                value={passwordConfirm}
                error={!checkPasswordConfirm ? true : false}
                fullWidth
                size="small"
                placeholder="Confirm password"
                type={"password"}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                helperText={helpTextPasswordConfirm}
              />
            </div>
            <br />
            <div>
              <Button
                onClick={handleSubmit}
                color="primary"
                fullWidth
                variant="contained"
              >
                Sign up
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </form>
  );
};

SignUpForm.propTypes = {
  setLoginForm: PropTypes.func,
  loginForm: PropTypes.bool,
};
