import React, { Fragment, useRef, useState } from "react";
import classes from "./Signup.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
      setError("Failed to create an account");
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
            <h2 className={classes["Login_Signup_heading"]}>Sign Up</h2>
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
              <div className={classes.inputContainer} id="password-confirm">
                <label className={classes["form_label"]}>
                  Password Confirmation:
                </label>
                <input
                  className={classes["form_input"]}
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </div>
              <button
                disabled={loading}
                className={classes["signin_login_btn"]}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className={classes["already_have_account"]}>
          Already have an account?<Link to="/login">Log In</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
