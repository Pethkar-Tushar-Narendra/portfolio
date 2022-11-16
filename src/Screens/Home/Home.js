import React from 'react';
import { FaInfinity } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate('/about');
  return (
    <>
      <div className="frame-container">
        <div className="frame"></div>
      </div>
      <div className="info-container">
        <div className="first">
          <FaInfinity className="home-icon" />
          <div>Hub</div>
        </div>
        <div className="second">Hi, I Am Tushar Pethkar</div>
        <div className="third">Full-Stack Developer</div>
        <div className="fourth">
          I'm A Full Stack Web Developer From Daman, India. I Hvae A Passion For
          Design And Love For Web Developement.
        </div>
        <div className="home-button">
          <div className="home-about" onClick={() => navigate('/about')}>
            About Me
          </div>
          <IoMdContact className="home-icon2" />
        </div>
      </div>
    </>
  );
};

export default Home;
