// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
// import Footer from '../components/common/Footer';
import SignUpForm from '../components/signup/SignUpForm';

// Home Component
export default function SignUp() {
  return (
    <div className="container">
      <Navbar />
      <SignUpForm />
      {/* <Footer /> */}
    </div>
  );
}
