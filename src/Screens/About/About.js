import React from 'react';
import './about.css';
import { MdDownloadForOffline } from 'react-icons/md';

const About = () => {
  const skills = [
    {
      img: '',
      name: 'HTML',
    },
    {
      img: '',
      name: 'CSS',
    },
    {
      img: '',
      name: 'JAVASCRIPT',
    },
    {
      img: '',
      name: 'REACT.JS',
    },
    {
      img: '',
      name: 'BOOTSTRAP',
    },
    {
      img: '',
      name: 'NODE.JS',
    },
    {
      img: '',
      name: 'MONGODB',
    },
    {
      img: '',
      name: 'MY-SQL',
    },
    {
      img: '',
      name: 'JAVA',
    },
    {
      img: '',
      name: 'SPRING',
    },
    {
      img: '',
      name: 'PYTHON',
    },
    {
      img: '',
      name: 'JQURY',
    },
  ];
  return (
    <>
      <div className="about-container">
        <div className="title">
          <div className="title1">ABOUT</div>
          <div className="title2">ME</div>
        </div>
        <div className="about-frame"></div>
        <div className="about-info">
          <div className="personalInfo">PERSONAL INFO</div>
          <div className="about-info2">
            <div className="col1">
              <div className="key">Name</div>
              <div className="value">Tushar Pethkar</div>
              <div className="key">Age</div>
              <div className="value">23</div>
              <div className="key">Email</div>
              <div className="value">pethkartusharnarendra@gmail.com</div>
              <div className="key">Address</div>
              <div className="value">Nashik, Maharashtra 422003</div>
              <div className="key">Skill</div>
              <div className="value">Full-Stack</div>
              <div className="key">Experience</div>
              <div className="value">6 months</div>
              <div className="key">Language</div>
              <div className="value">English, Hindi, Marathi</div>
            </div>
            <div className="col2">
              <div className="box">
                <div className="box-1">1</div>
                <div className="box-2">Years Of Experience</div>
              </div>
              <div className="box">
                <div className="box-1">5+</div>
                <div className="box-2">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="downloadCV">
            <div className="downloadCV-1">Download CV</div>
            <MdDownloadForOffline className="downloadCV-2" />
          </div>
        </div>
        <div className="skills">
          <div className="title2">MY</div>
          <div className="title1">SKILLS</div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="grid" key={i}>
              <img src={skill.img} alt={skill.name}></img>
              <div className="name">{skill.name}</div>
            </div>
          ))}
        </div>
        <div className="education">
          <div className="title2">MY</div>
          <div className="title1">EDUCATION</div>
        </div>
      </div>
    </>
  );
};

export default About;
