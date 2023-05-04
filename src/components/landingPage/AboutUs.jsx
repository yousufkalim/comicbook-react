// Init
import React from 'react';
import aboutImg from '../../assets/images/aboutImg.png';
import LogoIcon from '../../assets/gif/logoIcon.gif';

// Component
export default function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsSubContainer">
        <div className="aboutUsLeftDiv">
          <img src={aboutImg} alt="aboutUsImage" />
        </div>
        <div className=" aboutUsRightDiv">
          <div className="aboutUsIconGif">
            <img src={LogoIcon} alt="iconGif" />
          </div>
          <div className="aboutUsSubTitle">About Us</div>
          <div className="aboutUsTitleDivider" />
          <div className="aboutUsTitle">Interesting Comic Collections</div>
          <div className="aboutUsDesp">
            Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quisjhuyu.
          </div>
          <div className="aboutUsSubDesp">
            Duis aute irure dolor in reprehenderit in voluptate vegglit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui
            officia desytgce runt mollit anim id est laborum velit esse cillum dolore uijeu fugiat
            nulla pariatu epteur sint.
          </div>
          <div className="aboutUsBtn">Learn More</div>
        </div>
      </div>
    </div>
  );
}
