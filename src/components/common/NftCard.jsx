// Init
import React from 'react';
import NftImage from '../../assets/images/nft_image.png';
import OwnerImg from '../../assets/images/owner_profile.png';
import CreatorImg from '../../assets/images/creator_profile.png';
import Eth from '../../assets/images/eth_sign.svg';
// Component
export default function NftCard({ nftData }) {
  const sortedPrices = nftData?.bids?.sort((a, b) => +b.price - +a.price);
  const highestPrice = sortedPrices[0];
  return (
    <div key={nftData?.id} className="NftCardContainer">
      <div className="NftCardImageDiv">
        <img src={nftData?.doc ? nftData?.doc : NftImage} alt="nft" />
      </div>
      <div className="NftCardDataDiv">
        <div className="NftCardName">{nftData?.name}</div>
        <div className="NftCardSubHeadingsDiv">
          <div className="NftCardBidHeading">Highest bid</div>
          <div className="NftCardExpiryHeading">Ends in</div>
        </div>
        <div className="NftCardSubHeadingsDiv">
          <div className="NftCardPrice">
            <img src={Eth} alt="Eth" />
            <div>{highestPrice?.price}</div>
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
              <div className="NftCardCreatorUsername">
                {nftData?.user && `${nftData?.user?.first_name} ${nftData?.user?.last_name}`}
              </div>
            </div>
          </div>
          <div className="NftCardOwner">
            <div className="NftCardCreatorImageDiv">
              <img src={OwnerImg} alt="owner" />
            </div>
            <div className="NftCardCreatorTextDiv">
              <div className="NftCardCreatorName">Owner</div>
              <div className="NftCardCreatorUsername">
                {nftData?.owner[0]
                  ? `${nftData?.owner[0]?.first_name} ${nftData?.owner[0]?.last_name}`
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
