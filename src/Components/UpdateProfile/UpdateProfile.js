import React, { Fragment, useRef, useState } from "react";
import classes from "../Signup/Signup.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmailfunc, updatePasswordfunc } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmailfunc(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePasswordfunc(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Fragment>
      <div className={classes["form_background"]}></div>
      <div className={classes["full_form"]}>
        <div>
          <div>
            <h2 className={classes["Login_Signup_heading"]}>Update Profile</h2>
            {error && <p className={classes.errorText}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className={classes.inputContainer} id="email">
                <label className={classes["form_label"]}>Email:</label>
                <input
                  className={classes["form_input"]}
                  type="email"
                  ref={emailRef}
                  defaultValue={currentUser.email}
                />
              </div>
              <div className={classes.inputContainer} id="password">
                <label className={classes["form_label"]}>Password:</label>
                <input
                  className={classes["form_input"]}
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
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
                  placeholder="Leave blank to keep the same"
                />
              </div>
              <button
                disabled={loading}
                className={classes["signin_login_btn"]}
                type="submit"
              >
                Update
              </button>
              {/* <button>Sign In Google</button> */}
            </form>
          </div>
        </div>
        <div className={classes["already_have_account"]}>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProfile;
