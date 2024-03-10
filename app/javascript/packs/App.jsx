import React from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import FourOFour from './components/FourOFour';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id='main-body'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
