import React from 'react';

import footer_data from "../assets/footer.json";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import FooterIcon from './footer/FooterIcon';

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2>Questions?</h2>
      <p>Here's how to reach me!</p>
      <div className="footer-icons-container">
        <FooterIcon id="linkedin" img={linkedin} alt="LinkedIn" />
        <FooterIcon id="twitter" img={twitter} alt="Twitter" />
        <FooterIcon id="github" img={github} alt="GitHub" />
        <FooterIcon id="instagram" img={instagram} alt="Instagram" />
        <FooterIcon id="youtube" img={youtube} alt="YouTube" />
      </div>
      <div className="footer-contact-container">
        <div className="footer-contact">
          <p><strong>email:</strong> {footer_data["email"]}</p>
        </div>
        <div className="footer-divider">|</div>
        <div className="footer-contact">
          <p><strong>discord:</strong> {footer_data["discord"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;