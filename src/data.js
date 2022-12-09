import ProjectImg1 from './ProjectImg/Industrial robot image.png';
import ProjectImg2 from './ProjectImg/Mern Webapplication.png';
import ProjectImg3 from './ProjectImg/Resume Website.png';
import ProjectImg4 from './ProjectImg/robotic arm prototype.png';
import ProjectImg5 from './ProjectImg/portfolio.png';
import ProjectImg6 from './ProjectImg/portfolio template.jpg';
import ProjectImg7 from './ProjectImg/cdacUniversity.png';
import ProjectImg8 from './ProjectImg/Estatery.png';
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

const info = {
  selfInfo: {
    name: 'Tushar Pethkar',
    DescribeYourself: 'Full-Stack Developer',
    Sent1:
      "I'm A Full Stack Web Developer From Maharashtra, India. I Have A Passion For",
    sent2: 'Computers And Love For Web Developement.',
    experience: '<1 Years',
    language: 'English, Hindi, Marathi',
    birthDate: '04 April 1999',
    mobileNo: '+91 8446520712',
    location: 'Nashik, Maharashtra',
    email: 'pethkartusharnarendra@gmail.com',
  },
  projects: [
    {
      image: ProjectImg8,
      title: 'Estatery WebApp',
      time: 'Dec 2022',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://estatery-tushar.vercel.app/',
    },
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
      image: ProjectImg7,
      title: 'CDAC University',
      time: 'Nov 2022',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://cdac-university-tushar.netlify.app/',
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
  ],
  skills: [
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
  ],
  edu: [
    {
      time: '2022',
      class: 'PG-DAC',
      name: 'CDAC-Bangalore',
      marks: 'Percentage: 66%',
    },
    {
      time: '2016-2020',
      class: 'Graduation Production Engineering',
      name: 'K.K.Wagh Institute Of Engineering And Research, Nashik',
      marks: 'CGPA: 6.62',
    },
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
  ],
};
export default info;
