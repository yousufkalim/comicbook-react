// Init
import React from 'react';
import HeroGif from '../../assets/gif/hero.gif';

// Component
export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroSubContainer">
        <div className="heroLeftDiv">
          <div className="heroSubTitle">A New Comic Era</div>
          <div className="heroTitleDivider" />
          <div className="heroTitle">Interesting Comics</div>
          <div className="heroDesp">
            Once You Start Reading our Comics, You Cant Stop! Come and join us to discover some new
            worlds with us.
          </div>
          <div className="heroBtn">Explore</div>
        </div>
        <div className="heroRightDiv">
          <img src={HeroGif} alt="heroImage" />
        </div>
      </div>
    </div>
  );
}
