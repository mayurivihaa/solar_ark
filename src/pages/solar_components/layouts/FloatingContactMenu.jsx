import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaCalculator , FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const FloatingContactMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/solar_calculator");
  };

  return (
    <>
      {/* Desktop Floating Menu (Each Item Slides Independently and Flush with Right Side) */}
      <div className="hidden lg:flex fixed bottom-10 right-0 flex-col items-end space-y-4 pr-1">
        <div
          className={`bg-orange-600 text-white px-4 py-4 rounded-l-full flex items-center transition-transform duration-300 ease-in-out ${
            hoveredItem === 'contact' ? 'translate-x-0' : 'translate-x-full'
          }`}
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setTimeout(() => setHoveredItem(null), 800)}  // Slight delay before closing
          style={{
            transform: hoveredItem === 'contact' ? 'translateX(0)' : 'translateX(80%)',
            width: '180px',
            zIndex: 50,
          }}
        >
          <FaPhone className="mr-2" />
          <span>Contact Us</span>
        </div>
        <div
          className={`bg-orange-600 text-white px-4 py-4 rounded-l-full flex items-center transition-transform duration-300 ease-in-out ${
            hoveredItem === 'solar' ? 'translate-x-0' : 'translate-x-full'
          }`}
          onMouseEnter={() => setHoveredItem('solar')}
          onMouseLeave={() => setTimeout(() => setHoveredItem(null), 200)}
          style={{
            transform: hoveredItem === 'solar' ? 'translateX(0)' : 'translateX(82%)',
            width: '200px', 
            zIndex: 50,
          }}

        >
          <FaCalculator  className="mr-2" onClick={handleClick} />
          <span>Solar Calculator</span>
        </div>
        <div
          className={`bg-orange-600 text-white px-4 py-4 rounded-l-full flex items-center transition-transform duration-300 ease-in-out ${
            hoveredItem === 'locate' ? 'translate-x-0' : 'translate-x-full'
          }`}
          onMouseEnter={() => setHoveredItem('locate')}
          onMouseLeave={() => setTimeout(() => setHoveredItem(null), 200)}
          style={{
            transform: hoveredItem === 'locate' ? 'translateX(0)' : 'translateX(82%)',
            width: '200px',
            zIndex: 50,

          }}
        >
          <FaMapMarkerAlt className="mr-2" />
          <span>Locate Us</span>
        </div>
      </div>

      {/* Mobile Menu at Bottom */}
      <div className="lg:hidden fixed bottom-0 w-full flex justify-center items-center bg-transparent z-50">
        <div className="w-full flex justify-around bg-orange-600 text-white py-3">
          <button
            className="flex flex-col items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaCalculator  className="mb-1" />
            <span>Quick Links</span>
          </button>
          <button className="flex flex-col items-center" onClick={handleClick}>
            <FaMapMarkerAlt className="mb-1" />
            <span>Solar Calculator</span>
          </button>
        </div>

        {/* Drop-up Content for Quick Links */}
        {isOpen && (
          <div className="fixed bottom-16 w-full bg-orange-600 text-white py-4 rounded-t-lg z-50">
            <div className="text-center relative">
              <button
                className="absolute right-4 top-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="py-2 border-b border-white">
                <FaPhone className="inline mr-2" />
                <span>Contact Us</span>
              </div>
              <div className="py-2">
                <FaMapMarkerAlt className="inline mr-2" />
                <span>Locate Us</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingContactMenu;
