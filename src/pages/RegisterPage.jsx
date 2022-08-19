import * as React from "react";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Breadcrumbs from "@mui/material/Breadcrumbs";


import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";


export default function RegisterPage() {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  function handleRegister(email, password) {
    register(email, password);
  }

  return (
    <div className="standart-back">
            <Breadcrumbs aria-label="breadcrumb" className="ab-up-all">
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
          className="text-upload"
        >
          Sign Up
        </Link>
      </Breadcrumbs>
      <div className="auth-main">
        <div className="auth-block">
          <h3 className="auth-header">Sign Up</h3>
          <div className="auth__input-block">
            <p>Username</p>
            <div className="auth-input__form">
              <label htmlFor="email">
                <PersonOutlineIcon
                  id="usernameInp"
                  className="auth-input__icon"
                  sx={{color: "#ccc"}}

                />
              </label>
              <input
                placeholder="Type username"
                className="auth-input"
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="auth__input-block">
            <p>Password</p>
            <div className="auth-input__form">
              <label htmlFor="password">
                <LockOutlinedIcon
                  id="userpasswordInp"
                  className="auth-input__icon"
                  sx={{color: "#ccc"}}

                />
              </label>
              <input
                placeholder="Type password"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error ? (
            <Typography sx={{ color: "red", m: 1 }}>{error}</Typography>
          ) : null}
          <button
            className="auth-btn"
            onClick={() => handleRegister(email, password)}
          >
            Sign Up
          </button>
          <div className="auth-another">
            <p className="auth-another__hint">Or Sign In</p>
            <button onClick={() => navigate("/login")} className="auth-link">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
