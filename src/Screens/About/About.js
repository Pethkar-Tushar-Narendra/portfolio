import React from 'react';
import './about.css';
import CV from '../../CV/Tushar_pethkar_CV.pdf';
import { MdDownloadForOffline } from 'react-icons/md';
import { ImHtmlFive } from 'react-icons/im';
import { TbBrandJavascript } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaNode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
const About = () => {
  const skills = [
    {
      img: <ImHtmlFive className="icon" style={{ color: 'red' }} />,
      name: 'HTML',
      id: { color: 'red' },
    },
    {
      img: <IoLogoCss3 className="icon" style={{ color: 'blue' }} />,
      name: 'CSS',
      id: { color: 'red' },
    },
    {
      img: <TbBrandJavascript className="icon" style={{ color: 'yellow' }} />,
      name: 'JAVASCRIPT',
    },
    {
      img: <FaReact className="icon" style={{ color: 'blue' }} />,
      name: 'REACT.JS',
      id: { color: 'red' },
    },
    {
      img: <BsBootstrapFill className="icon" style={{ color: 'brown' }} />,
      name: 'BOOTSTRAP',
      id: { color: 'red' },
    },
    {
      img: <SiJquery className="icon" style={{ color: 'blue' }} />,
      name: 'JQUERY',
      id: { color: 'red' },
    },
    {
      img: <FaNode className="icon" style={{ color: 'green' }} />,
      name: 'NODE.JS',
      id: { color: 'red' },
    },
    {
      img: <SiMongodb className="icon" style={{ color: 'green' }} />,
      name: 'MONGODB',
      id: { color: 'red' },
    },
    {
      img: <SiMysql className="icon" style={{ color: 'blue' }} />,
      name: 'MY-SQL',
      id: { color: 'red' },
    },
    {
      img: <FaJava className="icon" style={{ color: 'blue' }} />,
      name: 'JAVA',
      id: { color: 'red' },
    },
    {
      img: <SiSpring className="icon" style={{ color: 'green' }} />,
      name: 'SPRINGBOOT',
      id: { color: 'red' },
    },
    {
      img: <FaPython className="icon" style={{ color: 'blue' }} />,
      name: 'PYTHON',
      id: { color: 'red' },
    },
  ];
  return (
    <div className="about-container">
      <div className="title">
        <h1 className="title1">ABOUT</h1>
        <h1 className="title2">ME</h1>
      </div>
      <div className="about-frame">
        <div className="frame"></div>
        <div className="about-info">
          <div className="col1">
            <p className="key">Name</p>
            <p className="value">Tushar Pethkar</p>
            <p className="key">Age</p>
            <p className="value">23</p>
            <p className="key">Email</p>
            <p className="value">pethkartusharnarendra@gmail.com</p>
            <p className="key">Address</p>
            <p className="value">Nashik, Maharashtra 422003</p>
          </div>
          <div className="col2">
            <p className="key">Skill</p>
            <p className="value">Full-Stack Developer</p>
            <p className="key">Experience</p>
            <p className="value">6 months</p>
            <p className="key">Language</p>
            <p className="value">English, Hindi, Marathi</p>
          </div>
        </div>
      </div>
      <a className="downloadCV" href={CV} download>
        <h2>Download CV</h2>
        <MdDownloadForOffline className="downloadCV-2" />
      </a>
      <div className="title">
        <h1 className="title2">MY</h1>
        <h1 className="title1">SKILL Set</h1>
      </div>
      <div className="about-skills">
        {skills.map((skill, i) => (
          <div className="grid" key={i}>
            {skill.img}
            <h2 className="name">{skill.name}</h2>
          </div>
        ))}
      </div>

      <div className="title">
        <h1 className="title2">MY</h1>
        <h1 className="title1">EDUCATION</h1>
      </div>
      <div className="about-education">
        <div className="edu-card">
          <div className="icon">
            <FaGraduationCap className="edu-icon" />
          </div>
          <div className="content">
            <div className="duratiom">
              <p>2013-2014</p>
            </div>
            <h2>Class X</h2>
            <p>Maratha High School, Nashik 422003</p>
            <p>Percentage: 85%</p>
          </div>
        </div>
        <div className="edu-card">
          <div className="icon">
            <FaGraduationCap className="edu-icon" />
          </div>
          <div className="content">
            <div className="duration">
              <p>2013-2014</p>
            </div>
            <h2>Class X</h2>
            <p>Maratha High School, Nashik 422003</p>
            <p>Percentage: 85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
