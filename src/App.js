import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/solar_components/Index/Index';
import About from './pages/solar_components/About/About'; // Import About component
import Navbar from './pages/solar_components/layouts/Navbar';
import BookingForm from './pages/solar_components/Index/BookingForm';
import Footer from './pages/solar_components/layouts/Footer';
import FloatingContactMenu from './pages/solar_components/layouts/FloatingContactMenu';
import SolarCalculator from './pages/solar_components/Solar_Calculator/SolarCalculator';

const App = () => {
   return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/solar_calculator" element={<SolarCalculator/>} />
      </Routes>
      <BookingForm/>
      <Footer />
      <FloatingContactMenu />
    </Router>
   );
}

export default App;
