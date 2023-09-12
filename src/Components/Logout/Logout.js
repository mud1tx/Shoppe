import React, { useState } from "react";
import classes from "./Profile.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      toast.success(" Logged Out!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className={classes.userDataContainer}>
      <NavBar />
      <div className={classes.body}>
        <div>
          <h2 className={classes.heading}>My Account</h2>
        </div>
        <div className={classes.linkData}>
          <div className={classes.linkContainer}>
            <NavLink to="/logout" className={classes.profileLink}>
              Profile
            </NavLink>
            <NavLink to="/logout/orders" className={classes.orderLink}>
              Orders
            </NavLink>
          </div>
          <div className={classes.profileWrapper}>
            <div className={classes.profileData}>
              <div>
                <div className={classes.img}>
                  <p>{currentUser.email.charAt(0).toUpperCase()}</p>
                </div>
              </div>
              <div className={classes.email}>
                <p>Email: {currentUser.email}</p>
              </div>
            </div>
            <div>
            <NavLink style={{"color":"white"}} to="/update-profile" className={classes.updateProfile}>
                Update Profile
              </NavLink>
            </div>
            <button className={classes.signoutbtn} onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
