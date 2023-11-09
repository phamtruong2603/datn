import React from 'react';
import Header from '../components/Header/Header';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Attractions from './Attractions/Attractions';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Web = () => {
  return (
    <div className='web'>
      <Header />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Web