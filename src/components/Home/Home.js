import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2 className="welcome-text">Welcome to</h2>
      <h1 className="heading">
        <span className="heading-primary">Grand</span>{" "}
        <span className="heading-secondary">Restaurant</span>
      </h1>
      <h4 className="heading-bottom">Making the delcious premium food since</h4>
      <h6 className="heading-bottom-small">-1990</h6>
    </div>
  );
};

export default Home;
