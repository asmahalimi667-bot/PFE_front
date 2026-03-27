import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">StartupSim</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#simulation">Simulation</a></li>
        </ul>

        <button className="btn">Start</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>
            Design of a Simulation Platform for Startup Failure & Risk Awareness
          </h1>
          <p>
            Analyze your startup using AI Decision Tree, Rule-Based System, and Mathematical Risk Models.
          </p>

          <div className="hero-buttons">
            <a href="#simulation" className="btn primary">Start Simulation</a>
            <a href="#features" className="btn outline">View Demo</a>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="features" className="methods">
        <h2>Simulation Methods</h2>

        <div className="cards">
          <div className="card">
            <h3>🌳 AI Decision Tree</h3>
            <p>Predict startup success using machine learning model and probability.</p>
          </div>

          <div className="card">
            <h3>📏 Rule-Based System</h3>
            <p>Evaluate startup using IF/THEN expert rules with clear explanations.</p>
          </div>

          <div className="card">
            <h3>🧮 Mathematical Model</h3>
            <p>Calculate a risk score based on a weighted mathematical formula.</p>
          </div>
        </div>
      </section>

      {/* How / Simulation Section */}
      <section id="simulation" className="how">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Enter startup variables</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Select simulation method</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Get results & recommendations</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to simulate your startup?</h2>
        <button className="btn primary">Start Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 StartupSim - PFE Project</p>
      </footer>

    </div>
  );
};

export default Home;