// Init
import React from 'react';
import RightArrow from '../../assets/images/right_arror.svg';
import SellNftGif from '../../assets/images/sell_nft_gif.png';
// Component
export default function SellNft() {
  return (
    <div className="sellNftContainer">
      <div className="sellNftTextDiv">
        <div className="sellNftTitle">Want to sell your NFT?</div>
        <div className="sellNftDesp">
          You can sell your NFTs and earn money with easy steps. you can create NFTs easily
        </div>
        <div className="sellNftBtn">
          Sell NFT
          <img src={RightArrow} alt="right_arror" />
        </div>
      </div>
      <div className="sellNftGifDiv">
        <img src={SellNftGif} alt="gif cards" />
      </div>
    </div>
  );
}
