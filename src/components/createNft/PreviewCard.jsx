// Init
import React from 'react';
import Eth from '../../assets/images/eth_sign.svg';
import Preview from '../../assets/images/preview_img.png';
import OwnerImg from '../../assets/images/owner_profile.png';
import CreatorImg from '../../assets/images/creator_profile.png';
// Component
export default function PreviewCard(props) {
  const { Image } = props;
  return (
    <div className="previewCardContainer">
      <div className={Image ? 'previewCardImageDiv' : 'previewCardImageDefaultDiv'}>
        <img src={Image || Preview} alt="preview" />
      </div>
      <div className="previewCardTextDiv">
        <div className="previewCardTitle">NFT NAME</div>
        <div className="previewCardPriceDiv">
          <div className="previewCardPriceText">Highest bid</div>
          <div className="previewCardPriceNum">
            <img src={Eth} alt="Eth" />
            <p>0.078 </p>
          </div>
        </div>
        <div className="previewCardDivider" />
        <div className="previewCardBottomDiv">
          <div className="previewCardCreator">
            <div className="previewCardCreatorImageDiv">
              <img src={CreatorImg} alt="created" />
            </div>
            <div className="previewCardCreatorTextDiv">
              <div className="previewCardCreatorName">Creator</div>
              <div className="previewCardCreatorUsername">@sadir_1</div>
            </div>
          </div>
          <div className="previewCardOwner">
            <div className="previewCardCreatorImageDiv">
              <img src={OwnerImg} alt="owner" />
            </div>
            <div className="previewCardCreatorTextDiv">
              <div className="previewCardCreatorName">Owner</div>
              <div className="previewCardCreatorUsername">@asma0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
