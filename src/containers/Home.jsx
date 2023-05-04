// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import AboutUs from '../components/landingPage/AboutUs';
import Hero from '../components/landingPage/Hero';
import SellNft from '../components/landingPage/SellNft';
import NewDrops from '../components/landingPage/NewDrops';
import Footer from '../components/common/Footer';
import FeaturedDrop from '../components/landingPage/FeaturedDrop';
import Subscription from '../components/common/Subscription';
import TopDrops from '../components/landingPage/TopDrops';
// import Form from '../components/Form';
// import Transcript from '../components/Transcript';

// Home Component
export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <AboutUs />
      <SellNft />
      <NewDrops />
      <FeaturedDrop />
      <TopDrops />
      <Subscription />
      <Footer />
    </div>
  );
}
