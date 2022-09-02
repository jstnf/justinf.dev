import React from 'react';

import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id="contact">
        <h2>Questions?</h2>
        <p>Here's how to reach me!</p>
        <div className="footer-icons-container">
          <div className="footer-icon" id="footer-icon-linkedin">
            <a href="https://linkedin.com/in/jstnf" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn"/>
            </a>
          </div>
          <div className="footer-icon" id="footer-icon-twitter">
            <a href="https://twitter.com/jstnfdev" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter"/>
            </a>
          </div>
          <div className="footer-icon" id="footer-icon-github">
            <a href="https://github.com/jstnf" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub"/>
            </a>
          </div>
          <div className="footer-icon" id="footer-icon-instagram">
            <a href="https://instagram.com/jstnf" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram"/>
            </a>
          </div>
          <div className="footer-icon" id="footer-icon-youtube">
            <a href="https://youtube.com/jstnf" target="_blank" rel="noreferrer">
              <img src={youtube} alt="YouTube"/>
            </a>
          </div>
        </div>
        <div className="footer-contact-container">
          <div className="footer-contact">
            <p>email: justin@justinf.dev</p>
          </div>
          <div className="footer-divider">|</div>
          <div className="footer-contact">
            <p>discord: jstnf#2626</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;