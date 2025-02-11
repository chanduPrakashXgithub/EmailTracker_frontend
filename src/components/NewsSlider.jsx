import React from "react";
import "./NewsSlider.css";

const NewsSlider = () => {
  const news = [
    { id: 1, title: "Chandu revolutionizing email tracking!", date: "Feb 7, 2025", content: "Learn how Chandu is changing email tracking forever." },
    { id: 2, title: "Google OAuth updates for better security", date: "Feb 6, 2025", content: "Google has rolled out new security updates for OAuth." },
    { id: 3, title: "New email filtering techniques introduced", date: "Feb 5, 2025", content: "Better ways to filter your emails automatically." },
  ];

  return (
    <div className="news-slider">
      <h2>Latest News</h2>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
