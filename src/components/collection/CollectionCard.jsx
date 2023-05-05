/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
// Init
import React from 'react';
import CollectionImg1 from '../../assets/images/collection_img1.png';
import CollectionImg2 from '../../assets/images/collection_img2.png';
import CollectionImg3 from '../../assets/images/collection_img3.png';
import CollectionImg4 from '../../assets/images/collection_img4.png';
import CreatorImg from '../../assets/images/creator_profile.png';

// Component

export default function CollectionCard() {
  return (
    <div className="collectionCardContainer">
      <div className="collectionCardImageDiv">
        <div className="collectionCardImageUpperDiv">
          <div className="collectionCardUpperImg">
            <img src={CollectionImg1} alt="collection" />
          </div>
          <div className="collectionCardUpperImg">
            <img src={CollectionImg2} alt="collection" />
          </div>
          <div className="collectionCardUpperImg">
            <img src={CollectionImg3} alt="collection" />
          </div>
        </div>
        <div className="collectionCardImageLowerDiv">
          {' '}
          <img src={CollectionImg4} alt="collection" />
        </div>
      </div>
      <div className="collectionCardTextDiv">
        <div className="collectionCardTitle">Cosmic Art Collection</div>
        <div className="collectionCardDetailDiv">
          <div>5 Items</div>
          <div>Created by</div>
          <div className="collectionCardCreatorDiv">
            <img src={CreatorImg} alt="profile" /> Creator@sadir_1
          </div>
        </div>
      </div>
    </div>
  );
}
