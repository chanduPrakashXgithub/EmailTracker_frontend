import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsSlider from "./components/NewsSlider";
import "./App.css";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://emailtracer-backend.onrender.com/api/emails",
          {
            credentials: "include",
          }
        );

        if (!response.ok) throw new Error("Failed to fetch emails");

        const data = await response.json();
        setEmails(data);
      } catch (error) {
        console.error("❌ Error fetching emails:", error);
        setError(error.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="emails-section">
          <h1>Recent Emails</h1>
          {isLoading ? (
            <p>Loading emails...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <ul className="email-list">
              {emails.map((email) => (
                <li key={email.id}>
                  <strong>{email.subject || "No Subject"}</strong>
                  <p>{email.from || "Unknown Sender"}</p>
                  <p>{email.date || "Unknown Date"}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <NewsSlider />
      </div>
    </div>
  );
};

export default App;
