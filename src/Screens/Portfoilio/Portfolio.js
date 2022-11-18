import React from 'react';
import './portfoilio.css';
import { ImEarth } from 'react-icons/im';
import ProjectImg1 from '../../ProjectImg/Industrial robot image.png';
import ProjectImg2 from '../../ProjectImg/Mern Webapplication.png';
import ProjectImg3 from '../../ProjectImg/Resume Website.png';
import ProjectImg4 from '../../ProjectImg/robotic arm prototype.png';
import ProjectImg5 from '../../ProjectImg/portfolio screenshot.jpg';
import ProjectImg6 from '../../ProjectImg/portfolio template.jpg';
import { Helmet } from 'react-helmet-async';
const Portfolio = () => {
  const projects = [
    {
      image: ProjectImg2,
      title: 'E-Com Web Application',
      time: 'Sept 2022',
      technologies: [
        'React.js',
        'Node.JS',
        'Express',
        'MongoDB',
        'Web Tokens',
        'Bootstrap',
      ],
      link: 'https://e-commerce-shopping-app-tushar.herokuapp.com/',
    },
    {
      image: ProjectImg3,
      title: 'Resume CV WebPage',
      time: 'Oct 2022',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://tushar-pethkar-resume.netlify.app/',
    },
    {
      image: ProjectImg6,
      title: 'Portfolio Template',
      time: 'Nov 2022',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://tushar-pethkar-portfolio1.netlify.app/',
    },
    {
      image: ProjectImg5,
      title: 'Portfolio Web Application',
      time: 'Nov 2022',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      link: '/',
    },
    {
      image: ProjectImg1,
      title: 'Optimization Process',
      time: 'Feb 2020',
      technologies: [
        'Robotics',
        'Inverse Kinematics',
        'Arduino',
        'Servo Motors',
      ],
      link: 'https://drive.google.com/drive/folders/147sV7cpY4e-Luu_5zO64RNkPW8pPIDkw',
    },
    {
      image: ProjectImg4,
      title: '6 Axes Robotic Arm',
      time: 'April 2020',
      technologies: [
        'Robotics',
        'Inverse Kinematics',
        'Arduino',
        'Servo Motors',
      ],
      link: 'https://drive.google.com/drive/folders/19qoPJiELS_Z6VXdjwcw0Q6ACl2UFiOiv',
    },
  ];
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
