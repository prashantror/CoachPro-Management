import React from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FourOFour from './components/common/FourOFour';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CompanyLanding from './components/companies/CompanyLanding';
import AcceptInvitation from './components/users/AcceptInvitation';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id='main-body'>
        <Routes>
          <Route path="/company/:slug" element={<CompanyLanding />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users/invitation/accept" element={<AcceptInvitation />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
