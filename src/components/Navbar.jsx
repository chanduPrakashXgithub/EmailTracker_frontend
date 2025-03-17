import React from "react";
import "./Navbar.css"; // Add a separate CSS file for styling

const Navbar = () => {
  const handleLogin = () => {
    window.location.replace("https://emailtracer-backend.onrender.com/api/auth/google");
  };

  return (
    <nav className="navbar">
      <div className="brand">Email Tracker</div>
      <button className="login-button" onClick={handleLogin}>
        Login with Google
      </button>
    </nav>
  );
};

export default Navbar;
