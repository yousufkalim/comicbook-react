// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import NftFiltration from '../components/marketPlace/NftFiltration';
import Subscription from '../components/common/Subscription';

// Home Component
export default function MarketPlace() {
  return (
    <div className="container">
      <Navbar />
      <NftFiltration />
      <Subscription />
      <Footer />
    </div>
  );
}
