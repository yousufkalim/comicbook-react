// Init
import { Rating } from '@mui/material';
import React from 'react';
import CardImg from '../../assets/images/card_nft.png';
// Component
export default function NewDropCard({ nftData }) {
  return (
    <div className="NewDropCardContainer">
      <div id="cardImg" className="NewDropCardBgImgDiv">
        <img src={CardImg} alt="nft" />
      </div>
      <div id="cardHover" className="NewDropCardHoverDiv">
        <div className="NewDropCardBidBtn">Place a Bid</div>
        <div className="NewDropCardDetialDiv">
          <div className="NewDropCardTitle">{nftData?.name}</div>
          <div className="NewDropCardAuctionDiv">
            <div className="NewDropCardRating">
              <Rating size="small" defaultValue={5} />
            </div>
            <div className="NewDropCardAuction">Auction · 1 of 1 available · Highest bid</div>
          </div>
          <div className="NewDropCardBottomDiv">
            <div className="NewDropCardCurrentBidDiv">
              <div className="NewDropCardBidTitle">Current Bid</div>
              <div className="NewDropCardEthPrice">
                <div className="NewDropCardEthAmount">{nftData?.bids[0]?.price}</div>
                <div className="NewDropCardEthSymbol">ETH</div>
              </div>
              <div className="NewDropCardUSDPrice">$245665</div>
            </div>
            <div className="NewDropCardDivider" />
            <div className="NewDropCardExpiryDiv">
              <div className="NewDropCardExpiryTitle">Auction Ending In</div>
              <div className="NewDropCardExpiryTimeDiv">
                <div className="NewDropCardTime">
                  <div className="NewDropCardTimeNum">02</div>
                  <div className="NewDropCardTimeAlp">Days</div>
                </div>
                <div className="NewDropCardTime">
                  <div className="NewDropCardTimeNum">09</div>
                  <div className="NewDropCardTimeAlp">Hours</div>
                </div>
                <div className="NewDropCardTime">
                  <div className="NewDropCardTimeNum">12</div>
                  <div className="NewDropCardTimeAlp">Minutes</div>
                </div>
                <div className="NewDropCardTime">
                  <div className="NewDropCardTimeNum">44</div>
                  <div className="NewDropCardTimeAlp">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
