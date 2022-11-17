import React from 'react';
import { FaInfinity } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate('/about');
  return (
    <div className="home-container">
      <div className="frame-container">
        <div className="frame"></div>
      </div>
      <div className="info-container">
        <div className="first">
          <FaInfinity className="home-icon" />
          <h1>Hub</h1>
        </div>
        <h1 className="center">Hi, I Am Tushar Pethkar</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I'm A Full Stack Web Developer From Daman, India. I Hvae A Passion For
        </p>
        <p> Design And Love For Web Developement.</p>
        <div className="home-button">
          <h2 onClick={() => navigate('/about')}>About Me</h2>
          <IoMdContact className="home-icon2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
