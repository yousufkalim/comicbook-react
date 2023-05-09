// Init
import React from 'react';
import Preview from '../../assets/images/preview_img.png';

// Component
export default function WalletCard(props) {
  const { img, title, desp } = props;
  return (
    <div className="walletCardContainer">
      <div className="walletCardImageDiv">
        <img src={img || Preview} alt="wallet" />
      </div>
      <div className="walletCardTextDiv">
        <h3>{title}</h3>
        <p>{desp}</p>
      </div>
    </div>
  );
}
