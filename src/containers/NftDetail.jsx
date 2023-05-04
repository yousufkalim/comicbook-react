// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import NftDetailSection from '../components/NftDetailPage/NftDetailSection';
import RecomendedItems from '../components/NftDetailPage/RecomendedItems';

// Home Component
export default function NftDetail() {
  return (
    <div className="container">
      <Navbar />
      <NftDetailSection />
      <RecomendedItems />
      <Footer />
    </div>
  );
}
