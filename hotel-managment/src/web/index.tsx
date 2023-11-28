import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from './Navbar/Navbar';
import OnTop from '../components/Floating/OnTop';
import Chat from '../components/Floating/Chat';
import Home from './Home';
import Attractions from './Attractions/Attractions';
import Room from './Room/Room';
import Detail from './Room/Detail';
import BookedRoom from './BookedRoom/BookedRoom';
import Footer from '../components/Footer/Footer';
import NavigateNotFound from '../components/NotFound/NavigateNotFound';

const Web = () => {
  return (
    <div className='web'>
      <Header />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:id" element={<Detail />} />

        <Route path="/attractions" element={<Attractions />} />

        <Route path="/booked-room" element={<BookedRoom />} />

        <Route path="/*" element={<NavigateNotFound />} />
      </Routes>
      <OnTop />
      <Chat />
      <Footer />
    </div>
  )
}

export default Web