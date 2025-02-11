import React from "react";
import "./Navbar.css"; // Add a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Email Tracker</div>
      <a 
        className="login-button" 
        href="https://emailtracer-backend.onrender.com/api/auth/google"
      >
        Login with Google
      </a>
    </nav>
  );
};

export default Navbar;
