import React from 'react';
import './contact.css';
import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaHackerrank } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="title">
        <h1 className="title1">CONTACT</h1>
        <h1 className="title2">ME</h1>
      </div>
      <div className="contact-frame">
        <div className="frame"></div>
        <div className="contact-info">
          <div className="col1">
            <div className="row">
              <div className="icon">
                <BsTelephoneFill />
              </div>
              <div className="info">
                <h2 className="key">Contact Me</h2>
                <h2 className="value">+91 8446520712</h2>
              </div>
            </div>
            <div className="row">
              <div className="icon">
                <HiLocationMarker />
              </div>
              <div className="info">
                <h2 className="key">Current Location</h2>
                <h2 className="value">Nashik, Maharashtra</h2>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <GrMail />
              </div>
              <div className="info">
                <h2 className="key">Email</h2>
                <h2 className="value">pethkartusharnarendra@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="col2">
            <BsTwitter className="icon" />
            <BsLinkedin className="icon" />
            <ImGithub className="icon" />
            <FaHackerrank className="icon" />
          </div>
        </div>
      </div>
      <h1>Send Email To Me</h1>
      <div className="form"></div>
    </div>
  );
};

export default ContactMe;
