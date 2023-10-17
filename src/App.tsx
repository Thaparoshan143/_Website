import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
