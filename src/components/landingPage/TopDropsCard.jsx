// Init
import React from 'react';

// Component
export default function TopDropCard(props) {
  const { half, pic } = props;
  return (
    <div>
      {/* {half && ( */}
      <div className="topDropCardContainer">
        <div className={half ? 'topDropCardImageDiv' : 'topDropCardImageDiv2'}>
          <img src={pic} alt="nft" />
        </div>
        <div className={half ? 'topDropCardTextDiv' : 'topDropCardTextDiv2'}>
          <div className="topDropCardTitleDiv">
            <div className="topDropCardTitle">Big Bang Mystrey</div>
            <div className="topDropCardCreator">By: Lara Clerk</div>
          </div>
          <div className="topDropCardBtnDiv">Read Comic</div>
        </div>
      </div>
      {/* )} */}
      {/* {full && (
        <div className="topDropCardContainer">
          <div className="topDropCardImageDiv">
            <img src={TopDropsNFT2} alt="nft" />
          </div>
          <div className="topDropCardTextDiv">
            <div className="topDropCardTitleDiv">
              <div className="topDropCardTitle">Big Bang Mystrey</div>
              <div className="topDropCardCreator">By: Lara Clerk</div>
            </div>
            <div className="topDropCardBtnDiv">Read Comic</div>
          </div>
        </div>
      )} */}
    </div>
  );
}
