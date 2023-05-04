// Init
import React from 'react';
import Carousel from 'react-multi-carousel';
import LogoIcon from '../../assets/gif/logoIcon.gif';
import NewDropCard from '../common/NewDropCard';
import 'react-multi-carousel/lib/styles.css';
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
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
          <div className="newDropsSliderItems">
            <NewDropCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
