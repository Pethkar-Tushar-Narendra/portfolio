import React from 'react';
import './portfoilio.css';
import { ImEarth } from 'react-icons/im';
import { Helmet } from 'react-helmet-async';
import info from '../../data';
const Portfolio = () => {
  const { projects } = info;
  return (
    <>
      <Helmet>
        <title>PORTFOLIO</title>
      </Helmet>
      <div className="project-container">
        <div className="title">
          <h1 className="title1">MY</h1>
          <h1 className="title2">Projects</h1>
        </div>
        <div className="card-container">
          {projects.map((e) => (
            <div className="card">
              <div className="lines"></div>
              <div className="imgBox">
                <img src={e.image} alt="Not Available" />
              </div>
              <div className="content">
                <h2 className="title">{e.title}</h2>
                <h2 className="time">{e.time}</h2>
                <h2 className="tech-title">Technologies used</h2>
                <div className="tech-container">
                  {e.technologies.map((e1) => (
                    <h2 className="grid">{e1}</h2>
                  ))}
                </div>
                <a className="button" href={e.link} target="_blank">
                  <h2>Live Demo</h2>
                  <ImEarth className="button-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
