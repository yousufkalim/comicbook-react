// Init
import React from 'react';
import NftImage from '../../assets/images/nft_image.png';
import OwnerImg from '../../assets/images/owner_profile.png';
import CreatorImg from '../../assets/images/creator_profile.png';
import Eth from '../../assets/images/eth_sign.svg';
// Component
export default function NftCard() {
  return (
    <div className="NftCardContainer">
      <div className="NftCardImageDiv">
        <img src={NftImage} alt="nft" />
      </div>
      <div className="NftCardDataDiv">
        <div className="NftCardName">The Killing Joker</div>
        <div className="NftCardSubHeadingsDiv">
          <div className="NftCardBidHeading">Highest bid</div>
          <div className="NftCardExpiryHeading">Ends in</div>
        </div>
        <div className="NftCardSubHeadingsDiv">
          <div className="NftCardPrice">
            <img src={Eth} alt="Eth" />
            <div>0.078</div>
          </div>
          <div className="NftCardExpiry">13h 36m 30s</div>
        </div>
        <div className="NftCardDivider" />
        <div className="NftCardBottomDiv">
          <div className="NftCardCreator">
            <div className="NftCardCreatorImageDiv">
              <img src={CreatorImg} alt="created" />
            </div>
            <div className="NftCardCreatorTextDiv">
              <div className="NftCardCreatorName">Creator</div>
              <div className="NftCardCreatorUsername">@sadir_1</div>
            </div>
          </div>
          <div className="NftCardOwner">
            <div className="NftCardCreatorImageDiv">
              <img src={OwnerImg} alt="owner" />
            </div>
            <div className="NftCardCreatorTextDiv">
              <div className="NftCardCreatorName">Owner</div>
              <div className="NftCardCreatorUsername">@asma0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
