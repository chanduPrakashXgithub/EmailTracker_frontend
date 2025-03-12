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

        const response = await fetch("https://emailtracer-backend.onrender.com/api/emails", {
          credentials: "include",
        });
        console.log("✅ Fetch response:", response);

        if (!response.ok) {
          throw new Error("Failed to fetch emails. Please try again.");
        }

        const data = await response.json();

        if (data.error) {
          setEmails([]);
          setError(data.error);
        } else {
          setEmails(data);
        }
      } catch (error) {
        console.error("Error fetching emails:", error);
        setError(error.message || "An unexpected error occurred.");
        setEmails([]);
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
        {/* Emails Section */}
        <div className="emails-section">
          <h1>Recent Emails</h1>
          {isLoading ? (
            <p>Loading emails...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : emails.length === 0 ? (
            <p>No emails found.</p>
          ) : (
            <ul className="email-list">
              {emails.map((email, index) => (
                <li key={index} className="email-item">
                  <strong className="email-subject">
                    {email.subject || "No Subject"}
                  </strong>
                  <p className="email-snippet">{email.snippet || "No Snippet"}</p>
                  <p className="email-date">{email.date || "No Date"}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* News Sidebar Section */}
        <NewsSlider />
      </div>
    </div>
  );
};

export default App;
