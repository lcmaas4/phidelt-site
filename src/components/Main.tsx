import React from 'react';
import './Main.css';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  const carouselImages = [
    'steve.jpg',
    'joepeanut.jpg',
    'nuphidelts-logo.png',
    'white logo.png',
  ];

  return (
    <div className="fat-wrapper">
      <div className="about-preview">
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
      <hr />
      <div className="about-p">
        <div className="about-p-image-wrapper">
          <img
            className="about-p-image"
            src="coop-and-jc.jpeg"
            alt="Joe Peanut"
          />
        </div>
        <div className="about-p-text-wrapper">
          <h1 className="about-p-text-header">Our story</h1>
          <p className="about-p-text">
            Founded with the bold vision of helping its brothers "become the
            greatest version of themselves," the Massachusetts Epsilon Chapter
            was officially recognized as the 169th active chapter of Phi Delta
            Theta on February 4th, 2012. A decade and over 350 brothers later,
            the chapter remains a powerful force for service, philanthropy, and
            brotherhood throughout Boston and beyond.<br></br>
            <br></br>
            <Link className="about-button" to="/about">
              More about us
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <div className="our-brothers-preview">
        <div className="our-brothers-text-wrapper">
          <h1 className="our-brothers-text-header">Our brothers</h1>
          <p className="our-brothers-text">
            Our brothers are a diverse group of individuals who come together to
            form a close-knit community. We are united by our shared values of
            friendship, sound learning, and rectitude, and we are committed to
            helping each other grow and succeed. <br></br>
            <br></br>
            <Link className="about-button" to="/brothers">
              See our roster
            </Link>
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
          <img
            className="philanthropy-image"
            src="70-backyard-concert.jpg"
            alt="Steve"
          />
        </div>
        <div className="philanthropy-text-wrapper">
          <h1 className="philanthropy-text-header">Our impact</h1>
          <p className="philanthropy-text">
            We find deep fulfillment in offering our support to the
            underprivileged. Our chapter regularly conducts philanthropic work,
            particularly in support of the LiveLikeLou Foundation to fund ALS
            research. In 2015, we were recognized as an Iron Phi Chapter due to
            our outstanding philanthropic fundraising efforts.<br></br>
            <br></br>
            <Link className="about-button" to="/philanthropy">
              Learn more
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <ImageCarousel images={carouselImages} />
      <hr />
    </div>
  );
};

export default Main;
