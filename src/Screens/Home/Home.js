import React from 'react';
import { FaInfinity } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const navigate = useNavigate('/about');
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
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
            I'm A Full Stack Web Developer From Maharashtra, India. I Have A
            Passion For
          </p>
          <p> Computers And Love For Web Developement.</p>
          <a className="home-button" onClick={() => navigate('/about')}>
            <h2>About Me</h2>
            <IoMdContact className="home-icon2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
