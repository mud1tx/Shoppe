import React, { Fragment, useRef, useState } from "react";
import classes from "../Signup/Signup.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for your further instruction");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <div className={classes["form_background"]}></div>
      <div className={classes["full_form"]}>
        <div>
          <div>
            <h2 className={classes["Login_Signup_heading"]}>Password Reset</h2>
            {error && <p className={classes.errorText}>{error}</p>}
            {message && <p className={classes.successText}>{message}</p>}
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
              <button
                disabled={loading}
                className={classes["signin_login_btn"]}
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <div>
              <Link className={classes.forgotPassword} to="/login">
                Log In
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

export default ForgotPassword;
