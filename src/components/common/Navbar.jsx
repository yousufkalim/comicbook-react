// Init
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useScrollPosition from '../../utils/ScrollPosition';

import Logo from '../../assets/gif/cba.gif';

// Component
export default function Navbar() {
  const nav = useNavigate();
  const handleConnectWallet = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      nav('/login');
    } else {
      nav('/wallet');
    }
  };
  const position = useScrollPosition();
  return (
    <div
      className="navbarContainer"
      style={{
        background: position > 10 ? 'black' : 'transparent',
      }}
    >
      <NavLink to="/" className="navbarLogoDiv">
        <img src={Logo} alt="logo" />
      </NavLink>
      <div className="navbarMenuDiv">
        <div className="navbarOptionsDiv">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}>
            Drops
          </NavLink>
          <NavLink
            to="/marketplace"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            Market Place
          </NavLink>
          <NavLink
            to="/nftdetail"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'activeNavLink' : 'navLink')}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <button type="button" className="navbarConnectWalletDiv" onClick={handleConnectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}
