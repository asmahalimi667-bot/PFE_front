// src/components/Home.jsx
import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">StartupSim</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Simulation</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="get-started">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        
        {/* Left */}
        <div className="hero-text">
          <h2>
            Transform Your Startup <br />
            Into Smart Decisions
          </h2>

          <p>
            Analyze, simulate, and predict startup failure using AI,
            decision trees, and intelligent risk models.
          </p>

          <div className="hero-buttons">
            <button className="btn-main">Get Started</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image">
          <img src={heroImage} alt="AI Illustration" />
        </div>

      </section>
    </div>
  );
};

export default Home;