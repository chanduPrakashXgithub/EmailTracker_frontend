import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful");
        window.location.reload();
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("An error occurred during login");
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">Email Tracker</div>
      <div className="login-form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
