import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <>
      <div className="about">
        <img
          className="about-image"
          src="white logo no letters.png"
          alt="Phi Delta Theta logo without letters"
        />
        <h1 className="about-text">Northeastern University</h1>
        <h3>Friendship - Sound Learning - Rectitude</h3>
      </div>
      <div className="about-p">
        <div className="about-p-image-wrapper">
          <img className="about-p-image" src="joepeanut.jpg" alt="Joe Peanut" />
        </div>
        <div className="about-p-text-wrapper">
          <h1 className="about-p-text-header">About us</h1>
          <p className="about-p-text">
            Founded with the bold vision of helping its brothers "become the
            greatest version of themselves," the Massachusetts Epsilon Chapter
            was officially recognized as the 169th active chapter of Phi Delta
            Theta on February 4th, 2012. A decade and over 350 brothers later,
            the chapter remains a powerful force for service, philanthropy, and
            brotherhood throughout Boston and beyond.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
