import React, { Fragment, useRef, useState } from "react";
import classes from "../Signup/Signup.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      toast.success("👋 Logged In!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch {
      setError("Failed to sign in");
      toast.error("Error Occurred!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <div className={classes["form_background"]}></div>
      <div className={classes["full_form"]}>
        <div>
          <div>
            <h2 className={classes["Login_Signup_heading"]}>Log In</h2>
            {error && <p className={classes.errorText}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className={classes.inputContainer} id="email">
                <label className={classes["form_label"]}>Email:</label>
                <input
                  className={classes["form_input"]}
                  type="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className={classes.inputContainer} id="password">
                <label className={classes["form_label"]}>Password:</label>
                <input
                  className={classes["form_input"]}
                  type="password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                disabled={loading}
                className={classes["signin_login_btn"]}
                type="submit"
              >
                Log In
              </button>
            </form>
            <div>
              <Link className={classes.forgotPassword} to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className={classes["already_have_account"]}>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
