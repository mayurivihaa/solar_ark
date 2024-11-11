import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for mobile

  return (
    <div className="relative ">
      {/* Mobile Number and Address for Desktop Only */}
      <div className=" lg:bg-black head-text absolute  right-10 text-white p-1 z-10">
        <p>Service Number: 9999XXXXXX, Customer Care Number: 9999XXXXXX</p>
      </div>

      {/* Navbar */}
      <nav className="absolute  top-0 left-0 right-0 z-10 bg-white rounded-md mx-10 mt-8 text-dark lg:p-4 flex justify-between items-center">
        <div className="flex items-center">
         <Link to="/">
         <img
            src={`${process.env.PUBLIC_URL}/assets/main-logo.jpeg`}
            alt="Logo"
            className="h-12 mr-4"
            style={{ width: '150px' }} // Increased logo width
          />
         </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 font-semibold"> {/* Increased font-weight */}
          <a href="#projects">Our Projects</a>
          <a href="#join">Join us</a>
          <a href="/about">About Us</a>
          <a href="#earn">Earn with us</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white p-4 flex flex-col items-center space-y-4 z-20">
            <a href="#projects" className="text-dark">Our Projects</a>
            <a href="#join" className="text-dark">Join us</a>
            <a href="/about" className="text-dark">About Us</a>
            <a href="#earn" className="text-dark">Earn with us</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
