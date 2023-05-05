// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import DropFilter from '../components/drop/DropFilter';

// Home Component
export default function Drop() {
  return (
    <div className="container">
      <Navbar />
      <DropFilter />
      <Footer />
    </div>
  );
}
