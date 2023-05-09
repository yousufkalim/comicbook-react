// Init
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import LogoIcon from '../../assets/gif/logoIcon.gif';
import NewDropCard from '../common/NewDropCard';
import 'react-multi-carousel/lib/styles.css';
import api from '../../api';
// Component
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function NewDrops() {
  const [nftData, setNftData] = useState([]);
  const getRecentNft = async () => {
    await api('get', `nft/?recent=${-1}`).then((res) => {
      setNftData(res?.data?.results);
    });
  };
  useEffect(() => {
    getRecentNft();
  }, []);
  return (
    <div className="newDropsContainer">
      <div className="newDropsHeaderDiv">
        <div className="newDropsHeaderLeft">
          <div className="newDropsHeaderIconGif">
            <img src={LogoIcon} alt="iconGif" />
          </div>
          <div className="newDropsHeaderSubTitle">About Us</div>
          <div className="newDropsHeaderDivider" />
          <div className="newDropsHeaderTitle">New Drops</div>
        </div>
        <div className="newDropsHeaderRight">
          <div className="newDropsUpComingBtn">Up Coming</div>
          <div className="newDropsAvailableBtn">Available</div>
        </div>
      </div>
      <div className="newDropsSliderDiv">
        <Carousel responsive={responsive}>
          {nftData.map((item) => {
            return (
              <div key={item?.id} className="newDropsSliderItems">
                <NewDropCard nftData={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
