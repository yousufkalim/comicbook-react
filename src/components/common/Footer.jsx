// Init
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/gif/Logo.gif';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Youtube from '../../assets/images/youtube.svg';

// Component
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerMainDiv">
          <div className="footerLogoDiv">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footerDesp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptates, dolor est
            hic quia incidunt necessitatibus quas quaerat possimus modi impedit excepturi atque
            consectetur perferendis accusantium cumque laborum blanditiis maiores.
          </div>
          <div className="footerIconsDiv">
            <div className="footerIcon">
              <img src={Facebook} alt="Facebook" />
            </div>
            <div className="footerIcon">
              <img src={Instagram} alt="Instagram" />
            </div>
            <div className="footerIcon">
              <img src={Linkedin} alt="Linkedin" />
            </div>
            <div className="footerIcon">
              <img src={Twitter} alt="Twitter" />
            </div>
            <div className="footerIcon">
              <img src={Youtube} alt="Youtube" />
            </div>
          </div>
          <div className="footerMenuDiv">
            <NavLink to="/" className="footerMenu">
              Terms & Conditions{' '}
            </NavLink>
            <NavLink to="/" className="footerMenu">
              {' '}
              Privacy Policy{' '}
            </NavLink>
            <NavLink to="/" className="footerMenu">
              Contact Us{' '}
            </NavLink>
            <NavLink to="/" className="footerMenu">
              About
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footerCopyRightDiv">© copyright {new Date().getFullYear()} nftdepot.art</div>
    </>
  );
}
