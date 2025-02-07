import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <img
        className="about-image"
        src="white logo no letters.png"
        alt="About us image"
      />
      <h1 className="about-text">Northeastern University</h1>
      <h3>Friendship - Sound Learning - Rectitude</h3>
    </div>
  );
};

export default About;
