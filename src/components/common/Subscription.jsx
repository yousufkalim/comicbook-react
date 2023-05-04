// Init
import React from 'react';
import SubImg from '../../assets/images/subscription.png';
// Component
export default function Subscription() {
  return (
    <div className="subscriptionContainer">
      <div className="subscriptionImageDiv">
        <img src={SubImg} alt="subscription" />
      </div>
      <div className="subscriptionTextDiv">
        <div className="subscriptionTitle">Subscribe And get our Updates </div>
        <div className="subscriptionDesp">
          We have a blog related to NFT so we can share thoughts and routines on our blog which is
          updated weekly
        </div>
        <div className="subscriptionInputDiv">
          <input className="subscriptionInput" placeholder="Enter your e-mail" />
          <div className="subscriptionBtn">Subscribe</div>
        </div>
      </div>
    </div>
  );
}
