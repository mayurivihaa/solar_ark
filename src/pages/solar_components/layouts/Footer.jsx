import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:flex lg:justify-between text-gray-600">
          {/* Logo and About Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/4">
            <div className="flex items-center  text-center justify-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/main-logo.jpeg`}
                alt="Logo"
                className="h-15 w-60"
              />
            </div>
            <p className="mt-4 text-sm  text-center justify-center">
              We Utilize The Latest Advancements In Solar Technology To Deliver
              Performance And Durability.
            </p>

            {/* Follow Us Section - Mobile Only */}
            <div className="block lg:hidden mt-6  text-center justify-center">
              <h2 className="font-semibold text-gray-800 mb-4">Follow us on</h2>
              <div className="flex text-3xl text-black space-x-4  text-center justify-center">
                <FaLinkedin />
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
          </div>

          {/* Quick Links and Contact Us Section */}
          <div className="lg:flex flex lg:space-x-8 w-full quick-link mb-6 quick-contact lg:mb-0 lg:w-1/2">
            {/* Quick Links Section */}
            <div className="mb-6 lg:mb-0 lg:w-1/2 ">
              <h2 className="font-semibold text-gray-800 mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/solar_calculator" className="hover:underline">
                    Solar Calculator
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#suryamitra" className="hover:underline">
                    Suryamitra
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="lg:w-1/2 contact-mobile">
              <h2 className="font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-sm">
                <strong>Phone No.</strong>
                <br />
                +00-888-27-240
              </p>
              <p className="mt-4 text-sm">
                <strong>Email Address</strong>
                <br />
                support@info.com
              </p>
              <p className="mt-4 text-sm">
                <strong>Registered Office</strong>
                <br />
                Address in Lorem{" "}
              </p>
            </div>
          </div>

          <div className="lg:w-1/4 desktop-follow  text-center justify-center">
            <h2 className="font-semibold text-gray-800 mb-4">Follow us on</h2>
            <div className="flex text-3xl text-black space-x-4  text-center justify-center">
              <FaLinkedin />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 last mt-8  border-t border-gray-200 pt-4 text-sm flex flex-col md:flex-row justify-between text-gray-500">
          <div className="flex footer-link space-x-4 mb-4 md:mb-0">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:underline">
              Cookies Settings
            </a>
          </div>
          <p className="text-center">
            © 2024 solarark.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
