import React from 'react';
import Carousel from 'react-multi-carousel';
import NftCard from '../common/NftCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
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
export default function RecomendedItems() {
  return (
    <div className="RecomendedItemsContainer">
      <div className="RecomendedItemsHeading">Recomended Items</div>
      <div className="RecomendedItemsSliderDiv">
        <Carousel responsive={responsive} showDots className="RecomendedItemsCarousel">
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
          <div className="newDropsSliderItems">
            <NftCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
