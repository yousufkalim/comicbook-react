// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SellNftForm from '../components/sellNft/SellNftForm';

// Home Component
export default function SellNft() {
  return (
    <div className="container">
      <Navbar />
      <SellNftForm />
      <Footer />
    </div>
  );
}
