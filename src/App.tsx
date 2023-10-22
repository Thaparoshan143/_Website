import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './NotFound';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Certification from './components/Certification';

const App : React.FC = ()=> {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/home' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/certification' element={<Certification />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutme' element={<AboutMe />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
