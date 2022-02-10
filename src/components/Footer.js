import React from 'react';

import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer" id="contact">
        <h2>Questions?</h2>
        <p>Here's how to reach me!</p>
        <div class="footer-icons-container">
          <div class="footer-icon" id="footer-icon-linkedin">
            <a href="https://linkedin.com/in/jstnf" target="_blank">
              <img src={linkedin}/>
            </a>
          </div>
          <div class="footer-icon" id="footer-icon-twitter">
            <a href="https://twitter.com/jstnfdev" target="_blank">
              <img src={twitter}/>
            </a>
          </div>
          <div class="footer-icon" id="footer-icon-github">
            <a href="https://github.com/jstnf" target="_blank">
              <img src={github}/>
            </a>
          </div>
          <div class="footer-icon" id="footer-icon-instagram">
            <a href="https://instagram.com/jstnf" target="_blank">
              <img src={instagram}/>
            </a>
          </div>
          <div class="footer-icon" id="footer-icon-youtube">
            <a href="https://youtube.com/jstnf" target="_blank">
              <img src={youtube}/>
            </a>
          </div>
        </div>
        <div class="footer-contact-container">
          <div class="footer-contact">
            <p>email: justinbfigueroa@gmail.com</p>
          </div>
          <div class="footer-divider">|</div>
          <div class="footer-contact">
            <p>phone: (email me)</p>
          </div>
          <div class="footer-divider">|</div>
          <div class="footer-contact">
            <p>discord: jstnf#2626</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;