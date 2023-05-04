// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
// import Footer from '../components/common/Footer';
import LoginForm from '../components/login/LoginForm';

// Home Component
export default function Login() {
  return (
    <div className="container">
      <Navbar />
      <LoginForm />
      {/* <Footer /> */}
    </div>
  );
}
