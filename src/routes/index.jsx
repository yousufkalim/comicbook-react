// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from '../containers/Collection';
import CreateNft from '../containers/CreateNft';
import Drop from '../containers/Drop';

// Routes
import Home from '../containers/Home';
import Login from '../containers/Login';
import MarketPlace from '../containers/MarketPlace';
import NftDetail from '../containers/NftDetail';
import SellNft from '../containers/SellNft';
import SignUp from '../containers/Signup';
import Wallet from '../containers/Wallet';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nftdetail" element={<NftDetail />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/drop" element={<Drop />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/createnft" element={<CreateNft />} />
      <Route path="/sellnft" element={<SellNft />} />
    </Routes>
  );
}
export default Index;
