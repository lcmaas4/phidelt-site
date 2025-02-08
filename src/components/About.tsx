import React from 'react';
import './About.css';
import ImageCarousel from './ImageCarousel';

const About: React.FC = () => {
  const carouselImages = ['steve.jpg', 'joepeanut.jpg'];

  return (
    <div className="fat-wrapper">
      <div className="about">
        <div className="about-stuff">
          <img
            className="about-image"
            src="white logo no letters.png"
            alt="Phi Delta Theta logo without letters"
          />
          <h1 className="about-text">Northeastern University</h1>
          <h3>Friendship - Sound Learning - Rectitude</h3>
        </div>
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
            brotherhood throughout Boston and beyond.<br></br>
            <br></br>
            <a className="about-button" href="/about">
              More about us
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="our-brothers-preview">
        <div className="our-brothers-text-wrapper">
          <h1 className="our-brothers-text-header">Our Brothers</h1>
          <p className="our-brothers-text">
            Our brothers are a diverse group of individuals who come together to
            form a close-knit community. We are united by our shared values of
            friendship, sound learning, and rectitude, and we are committed to
            helping each other grow and succeed. <br></br>
            <br></br>
            <a className="about-button" href="/about">
              See our roster
            </a>
          </p>
        </div>
        <div className="our-brothers-image-wrapper">
          <img
            className="our-brothers-image"
            src="our brothers.png"
            alt="Our Brothers"
          />
        </div>
      </div>
      <hr />
      <div className="philanthropy-preview">
        <div className="philanthropy-image-wrapper">
          <img className="philanthropy-image" src="steve.jpg" alt="Steve" />
        </div>
        <div className="philanthropy-text-wrapper">
          <h1 className="philanthropy-text-header">Philanthropy</h1>
          <p className="philanthropy-text">
            We make it our duty to support those who have been less fortunate
            than ourselves. As such, our chapter regularly conducts
            philanthropic work, particularly in support of the LiveLikeLou
            Foundation to fund ALS research. In 2015, we were recognized as an
            Iron Phi Chapter due to our outstanding philanthropic fundraising
            efforts.<br></br>
            <br></br>
            <a className="about-button" href="/about">
              Learn more
            </a>
          </p>
        </div>
      </div>
      <hr />
      <ImageCarousel images={carouselImages} />
      <hr />
    </div>
  );
};

export default About;
