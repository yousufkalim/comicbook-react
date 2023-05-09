import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import NftCard from '../common/NftCard';
import api from '../../api';

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
  const [nftData, setNftData] = useState([]);

  const getAllNFTData = async () => {
    await api('get', 'nft/').then((res) => {
      setNftData(res?.data?.results);
    });
  };
  useEffect(() => {
    getAllNFTData();
  }, []);

  return (
    <div className="RecomendedItemsContainer">
      <div className="RecomendedItemsHeading">Recomended Items</div>
      <div className="RecomendedItemsSliderDiv">
        <Carousel responsive={responsive} showDots className="RecomendedItemsCarousel">
          {nftData.map((item) => {
            return (
              <div className="newDropsSliderItems">
                <NftCard nftData={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
