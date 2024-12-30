import React from "react";
import solarPanel1 from "../../../assets/images/newslide2.png";
import solarPanel2 from "../../../assets/images/bottom-right.png";
import solarPanel3 from "../../../assets/images/solar-panel3.jpeg";

const ContactUs = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={solarPanel1}
            alt="Slide"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay Content Positioned at the Bottom */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center text-white pb-8">
          <h1 className="m-0 text-4xl md:text-4xl font-bold">
            India's top companies choose Solar Square
          </h1>
          <button className="mt-4 bg-red-800 re text-white py-4 px-6 rounded-md">
            Get A Quote
          </button>
        </div>
      </div>

      {/* solar project */}
      <div className="bg-red-800 flex flex-col items-center py-12">
        <div className="grid solution-content grid-cols-1 md:grid-cols-2 gap-6 max-w-full md:max-w-8xl  px-5 ">
          <div className="p-6 flex flex-col justify-center  text-white  relative overflow-hidden">
            <h3 className="lg:text-3xl md:text-1xl font-semibold mb-4 ">
              Submit a
            </h3>
            <h3 className="lg:text-3xl md:text-1xl font-semibold mb-4">
              <span className="text-[#ef8935]">Solar Projects</span> enquiry
            </h3>
            <p className=" mb-6">
              Our solar experts will guide you in your project
            </p>
          </div>

          {/* form */}
          <form className="rounded-lg p-6 flex flex-col bg-white relative overflow-hidden border transition">
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Company Pin Code
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Average Monthly Bill <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="btn text-left text-white bg-orange-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* section fourth */}
      <div className="bg-white flex flex-col items-center py-12">
        <h2 className="p-3 text-4xl text-center font-bold text-gray-800 mb-8">
          Hassel-free professional and friendly installtion experience
          <span className="block text-center">
            we are committed to making your solar journey easier
          </span>
        </h2>
        <div className="h-[400px] grid solution-content grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-4">
          <div
            className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
            style={{ backgroundImage: `url(${solarPanel2})` }}
          >
            <div className="flex flex-col justify-end p-2 flex-grow">
              <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                Innovative Technology
              </h3>
              <p className="text-white">
                We Utilize The Latest Advancements In Solar Technology To
                Deliver Top-Of-The-Line Products That Offer Superior Performance
                And Durability.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
            style={{ backgroundImage: `url(${solarPanel3})` }}
          >
            <div className="flex flex-col justify-end p-2 flex-grow">
              <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                Sustainability Focus
              </h3>
              <p className="text-white">
                At The Core Of Our Operations Is A Commitment To Environmental
                Stewardship. We Strive To Reduce Our Carbon Footprint And ctices
                Throughout Our Business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fifth section */}
      <div className="bg-[#f9ebe5] flex flex-col items-center py-12">
        <div className="flex mt-4 flex-col md:flex-row  overflow-hidden max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex-[1] h-48 md:h-auto"></div>

          {/* Text Section */}
          <div className="flex-[2] bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Card Title
            </h2>
            <p className="text-gray-600 mb-6">
              This is a detailed description or text content that goes alongside
              the image. You can write as much as needed here. This is a
              detailed description or text content that goes alongside the
              image. You can write as much as needed here.
            </p>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* section seventh */}
      <div className="bg-white flex flex-col items-center py-12">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
          Exceptional quality. End-to-end service. Delighted customers
        </h2>
        <div className="flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex-[1] h-48 md:h-auto">
            <img
              src={solarPanel1}
              alt="solarPanel1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-[2] bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Card Title
            </h2>
            <p className="text-gray-600 mb-6">
              This is a detailed description or text content that goes alongside
              the image. You can write as much as needed here. This is a
              detailed description or text content that goes alongside the
              image. You can write as much as needed here.
            </p>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
              Learn More
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex mt-4 flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex-[1] h-48 md:h-auto">
            <img
              src={solarPanel1}
              alt="solarPanel1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-[2] bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Card Title
            </h2>
            <p className="text-gray-600 mb-6">
              This is a detailed description or text content that goes alongside
              the image. You can write as much as needed here. This is a
              detailed description or text content that goes alongside the
              image. You can write as much as needed here.
            </p>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
