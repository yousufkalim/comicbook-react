// Init
import React from 'react';
import FeaturedDrops from '../../assets/images/featured_drops.png';
// Component
export default function FeaturedDrop() {
  return (
    <div className="FeaturedDropContainer">
      <div className="FeaturedDropTextDiv">
        <div className="FeaturedDropSubTitle">Best of Era</div>
        <div className="FeaturedDropTitleDivider" />
        <div className="FeaturedDropTitle">Featured Drops</div>

        <div className="FeaturedDropDesp">
          Duis aute irure dolor in reprehenderit in voluptate vegglit esse cillum dolore eu fugiat
          nulla pariatur.
        </div>
        <div className="FeaturedDropBtn">See All</div>
      </div>
      <div className="FeaturedDropImageDiv">
        <div className="FeaturedDropImage">
          <img src={FeaturedDrops} alt="FeaturedDrops" />
        </div>
      </div>
    </div>
  );
}
