// Init
import React from 'react';
import Carousel from 'react-multi-carousel';
import WalletCard from './WalletCard';
import metamaskLogo from '../../assets/images/metamask_logo.svg';
import fortmaticLogo from '../../assets/images/fortmatic_logo.svg';
import portisLogo from '../../assets/images/portis_logo.svg';
import coinbaseLogo from '../../assets/images/coinbase_logo.svg';
import authereumLogo from '../../assets/images/authereum_logo.svg';

// Component
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.3,
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
export default function ConnectWallet() {
  return (
    <div className="connectWalletContainer">
      <div className="connectWalletHeaderDiv">
        <div className="connectWalletHeaderTitle">Connect Your Wallet</div>
        <div className="connectWalletHeaderDesp">
          sign in with one of available wallet providers or create a new wallet
        </div>
      </div>
      <div className="connectWalletSliderDiv">
        <Carousel responsive={responsive} infinite className="RecomendedItemsCarousel">
          <div className="newDropsSliderItems">
            <WalletCard
              img={portisLogo}
              title="Portis"
              desp="Offer your users a familiar experience by signing in with just an email and password.."
            />
          </div>
          <div className="newDropsSliderItems">
            <WalletCard
              img={fortmaticLogo}
              title="Fortmatic"
              desp="Let users access your Ethereum app from anywhere. No more browser extensions."
            />
          </div>
          <div className="newDropsSliderItems">
            <WalletCard
              img={metamaskLogo}
              title="Metamask"
              desp="Available as a browser extension and as a mobile app, MetaMask equips you with a key vault."
            />
          </div>
          <div className="newDropsSliderItems">
            <WalletCard
              img={coinbaseLogo}
              title="Coinbase"
              desp="Coinbase Wallet is a self custody crypto wallet, putting you in control of your crypto,."
            />
          </div>
          <div className="newDropsSliderItems">
            <WalletCard
              img={authereumLogo}
              title="Authereum "
              desp="No downloads, no seed phrases. Simply, the best Web3 experience at your fingertips."
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
