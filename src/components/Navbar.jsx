import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://emailtracer-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, appPassword: password }),
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Login failed");

      window.location.reload(); // ✅ Reload after successful login
    } catch (error) {
      console.error("❌ Login error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">Email Tracker</div>
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
      <button onClick={handleLogin}>Login</button>
    </nav>
  );
};

export default Navbar;
