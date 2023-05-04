// Init
import React from 'react';
import LogoIcon from '../../assets/gif/logoIcon.gif';
import TopDropCard from './TopDropsCard';
import TopDropsNFT from '../../assets/images/top_drops1.png';
import TopDropsNFT2 from '../../assets/images/top_drops2.png';
import TopDropsNFT3 from '../../assets/images/top_drops3.png';
import TopDropsNFT4 from '../../assets/images/top_drops4.png';
import TopDropsNFT5 from '../../assets/images/top_drops5.png';

// Component
export default function TopDrops() {
  return (
    <div className="topDropsContainer">
      <div className="topDropsHeaderDiv">
        <div className="topDropsHeaderLogo">
          <img src={LogoIcon} alt="iconGif" />
        </div>
        <div className="topDropsHeaderTextDiv">
          <div className="topDropsHeaderSubTitle">Choice of Experts</div>
          <div className="topDropsHeaderDivider" />
          <div className="topDropsHeaderTitle">Top Drops</div>
        </div>
      </div>
      <div className="topDropsGridContainer">
        <div className="topDropsLeftGrid">
          <div className="topDropsLeftTop">
            <TopDropCard half pic={TopDropsNFT} />
          </div>
          <div className="topDropsLeftBottom">
            <TopDropCard half pic={TopDropsNFT3} />
          </div>
        </div>
        <div className="topDropsCenterGrid">
          <TopDropCard pic={TopDropsNFT2} />
        </div>
        <div className="topDropsRightGrid">
          <div className="topDropsRightTop">
            <TopDropCard half pic={TopDropsNFT4} />
          </div>
          <div className="topDropsRightBottom">
            <TopDropCard half pic={TopDropsNFT5} />
          </div>
        </div>
      </div>
    </div>
  );
}
