import React from 'react';
import './herosection.css';
import robotHi from "../img/robot-hi.gif";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <article className="hero-content">
        <h2 className="hero-title">
          Elevate Your Learning Journey with <span className="highlight">Grade.ai</span>
        </h2>
        <p className="hero-text">
          From comprehensive feedback to personalized study sessions, Grade.ai empowers professors and students alike.
        </p>
        <p className="hero-text">
          Unlock your potential, refine your skills, and embrace the future of education with Grade.ai.
        </p>
        <p className="hero-text">
          Think Innovation. Think Precision. Think Grade.ai.
        </p>
      </article>
      <img className="hero-image" src={robotHi} alt="Robot Hi" />
    </section>
  );
};

export default HeroSection;
