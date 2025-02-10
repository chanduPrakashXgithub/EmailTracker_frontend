import React from "react";
import "./Navbar.css"; // Add a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Email Tracker</div>
      <button 
        className="login-button" 
        onClick={() => (window.location.href = "https://emailtracer-backend.onrender.com/api/auth/google")}
      >
        Login with Google
      </button>
    </nav>
  );
};

export default Navbar;
