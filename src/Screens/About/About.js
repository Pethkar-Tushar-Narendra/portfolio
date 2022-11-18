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
import { GiRobotGrab } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RiContactsBookFill } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
const About = () => {
  const edu = [
    {
      time: '2013-2014',
      class: 'Class X',
      name: 'Maratha High School, Nashik',
      marks: 'Percentage: 85%',
    },
    {
      time: '2015-2016',
      class: 'Class XII',
      name: 'K.T.H.M. Collage Gangapur Road, Nashik',
      marks: 'Percentage: 59%',
    },
    {
      time: '2016-2020',
      class: 'Graduation Production Engineering',
      name: 'K.K.Wagh Institute Of Engineering And Research, Nashik',
      marks: 'CGPA: 6.62',
    },
    {
      time: '2022',
      class: 'PG-DAC',
      name: 'CDAC-Bangalore',
      marks: 'Percentage: 66%',
    },
  ];
  const skills = [
    {
      img: <ImHtmlFive className="icon" style={{ color: '#990000' }} />,
      name: 'HTML',
      id: { color: 'red' },
    },
    {
      img: <IoLogoCss3 className="icon" style={{ color: '#2965f1' }} />,
      name: 'CSS',
      id: { color: 'red' },
    },
    {
      img: <TbBrandJavascript className="icon" style={{ color: '#f0db4f' }} />,
      name: 'JAVASCRIPT',
    },
    {
      img: <FaReact className="icon" style={{ color: '#61dbfb' }} />,
      name: 'REACT.JS',
      id: { color: 'red' },
    },
    {
      img: <BsBootstrapFill className="icon" style={{ color: '#563d7c' }} />,
      name: 'BOOTSTRAP',
      id: { color: 'red' },
    },
    {
      img: <GiRobotGrab className="icon" style={{ color: 'orange' }} />,
      name: 'ROBOTICS',
    },
    {
      img: <FaNode className="icon" style={{ color: '#215732' }} />,
      name: 'NODE.JS',
      id: { color: 'red' },
    },
    {
      img: <SiMongodb className="icon" style={{ color: '#589636' }} />,
      name: 'MONGODB',
      id: { color: 'red' },
    },
    {
      img: <SiMysql className="icon" style={{ color: '#00758f' }} />,
      name: 'MY-SQL',
      id: { color: 'red' },
    },
    {
      img: <FaJava className="icon" style={{ color: '#1FBED6' }} />,
      name: 'JAVA',
      id: { color: 'red' },
    },
    {
      img: <SiSpring className="icon" style={{ color: '#00FF7F' }} />,
      name: 'SPRINGBOOT',
      id: { color: 'red' },
    },
    {
      img: <FaPython className="icon" style={{ color: '#8B7D6B' }} />,
      name: 'PYTHON',
      id: { color: 'red' },
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>ABOUT</title>
      </Helmet>
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
          {edu.map((ele, i) => (
            <div className="edu-card" key={i}>
              <div className="icon">
                <FaGraduationCap className="edu-icon" />
              </div>
              <div className="content">
                <div className="duration">
                  <p>{ele.time}</p>
                </div>
                <h2>{ele.class}</h2>
                <p>{ele.name}</p>
                <p>{ele.marks}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="downloadCV" onClick={() => navigate('/contactMe')}>
          <h2>Contact Me</h2>
          <RiContactsBookFill className="downloadCV-2" />
        </a>
      </div>
    </>
  );
};

export default About;
