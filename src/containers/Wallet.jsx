// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ConnectWallet from '../components/wallet/ConnectWallet';

// Home Component
export default function Wallet() {
  return (
    <div className="container">
      <Navbar />
      <ConnectWallet />
      <Footer />
    </div>
  );
}
