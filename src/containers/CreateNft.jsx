// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CreateNftForm from '../components/createNft/CreateNftForm';

// Home Component
export default function CreateNft() {
  return (
    <div className="container">
      <Navbar />
      <CreateNftForm />
      <Footer />
    </div>
  );
}
