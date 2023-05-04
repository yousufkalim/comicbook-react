// Init
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/gif/Logo.gif';

// Component
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLogoDiv">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbarMenuDiv">
        <div className="navbarOptionsDiv">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}>
            Drops
          </NavLink>
          <NavLink
            to="/marketplace"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            Market place
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            About
          </NavLink>
          <NavLink
            to="contactus"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="navbarConnectWalletDiv">Connect Wallet</div>
    </div>
  );
}
