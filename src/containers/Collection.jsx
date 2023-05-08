// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CollectionFilter from '../components/collection/CollectionFilter';

// Home Component
export default function Collection() {
  return (
    <div className="container">
      <Navbar />
      <CollectionFilter />
      <Footer />
    </div>
  );
}
