import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import solarPanel1 from "../../../assets/images/newslide2.png";
import solarPanel2 from "../../../assets/images/bottom-right.png";
import solarPanel3 from "../../../assets/images/solar-panel3.jpeg";
import HomeIcon from "../../../assets/images/home.png";
import { FaQuoteLeft, FaQuoteRight, FaAngleUp } from "react-icons/fa";
import CountUp from "react-countup";
import City from "../../../assets/images/city-bg.png";
import Image1 from "../../../assets/images/img1.png";
import Image2 from "../../../assets/images/img2.png";
import Image3 from "../../../assets/images/img3.png";
import Image4 from "../../../assets/images/img4.png";
import busimage from "../../../assets/images/bus.png";

const ContactUs = () => {
  const [isBusMoved, setIsBusMoved] = useState(false); // State to track if the bus has moved fully
  const [inView, setInView] = useState(false);
  const countUpRef = useRef(null);

  const [formData2, setFormData2] = useState({
    name: "",
    companyName: "",
    whatsAppNumber: "",
    city: "",
    companyPinCode: "",
    averageElectricBill: "",
  });

  const handleChange = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contactform",
        formData2
      );

      alert(response.data.message);
      setFormData2({
        name: "",
        companyName: "",
        whatsAppNumber: "",
        city: "",
        companyPinCode: "",
        averageElectricBill: "",
      });
      console.log(formData2);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  useEffect(() => {
    // Set up the intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is in view
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve the element after it has been detected
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Start observing the target element
    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  const [textIndex, setTextIndex] = useState(0);
  const [showBus, setShowBus] = useState(true);
  const sentence = "Indias 1 home solar company";

  useEffect(() => {
    if (textIndex < sentence.length && showBus) {
      const interval = setInterval(() => {
        setTextIndex((prev) => prev + 1);
      }, 100); // Speed of letter animation
      return () => clearInterval(interval);
    } else if (textIndex === sentence.length) {
      // End bus animation after the sentence
      setTimeout(() => setShowBus(false), 1000); // Fade-out delay
    }
  }, [textIndex, showBus, sentence.length]);

  useEffect(() => {
    // After the bus has moved fully, hide the text
    const timer = setTimeout(() => {
      setIsBusMoved(true);
    }, 5000); // 5000ms corresponds to the bus movement duration

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

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
        {/* Overlay Content Positioned Responsively */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white px-12 pb-8 
      justify-center items-center md:justify-end md:items-start"
        >
          <h1 className="m-0 text-4xl md:text-4xl font-bold text-center md:text-left">
            India's top companies choose Solar Ark
          </h1>
          <button className="mt-4 bg-red-900 text-white py-4 px-6 rounded-md">
            Get A Quote
          </button>
        </div>
      </div>

      {/* moving bus */}
      <div className="container relative flex justify-center items-center mb-10 h-[200px]">
        {/* Moving Bus Container */}
        <div className="relative w-full">
          {/* Animated Text */}
          <div className="position-relative text-center z-10">
            <div
              className="font-bold  text-red-900 bg-transparent text-animation
                   text-2xl md:text-8xl text-center"
            >
              {sentence.slice(0, textIndex)}
            </div>
          </div>

          {/* Animated Bus */}
          {showBus && (
            <img
              src={busimage}
              alt="Moving Bus"
              className="bus-animation absolute top-1/2 transform -translate-y-1/2 w-20"
            />
          )}
        </div>
      </div>

      {/* moving bus */}
      {/* solar project */}
      <div className="bg-red-900 flex flex-col items-center py-12 mb-3">
        <div className="grid solution-content grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl  px-5 ">
          <div className="p-6 flex flex-col justify-center  text-white  relative overflow-hidden">
            <h3 className="lg:text-3xl md:text-1xl font-semibold mb-4 ">
              Submit a
            </h3>
            <h3 className="lg:text-3xl md:text-1xl font-semibold mb-4">
              <span className="text-[#eb9288d4]">Solar Projects</span> enquiry
            </h3>
            <p className=" mb-6">
              Our solar experts will guide you in your project
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg md:px-6 p-3 py-4 flex flex-col bg-white relative overflow-hidden border transition"
          >
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="name"
                value={formData2.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="companyName"
                onChange={handleChange}
                value={formData2.companyName}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="whatsAppNumber"
                onChange={handleChange}
                value={formData2.whatsAppNumber}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="city"
                value={formData2.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Company Pin Code
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="companyPinCode"
                value={formData2.companyPinCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700 block">
                Average Monthly Bill <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900"
                name="averageElectricBill"
                value={formData2.averageElectricBill}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-red-900 border-gray-300 rounded focus:ring-red-900"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the solarARK{" "}
                <span className="text-red-900 font-semibold">
                  Terms of Service{" "}
                </span>
                &
                <span className="text-red-900 font-semibold">
                  {" "}
                  privacy policy
                </span>
                .
              </label>
            </div>
            <div className="flex mt-2">
              <button className="btn text-left text-white bg-red-900">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* second section */}
      <div className="relative p-3   bg-white text-center">
        <div className="flex justify-center items-center sm:my-16">
          {/* Left Quote */}
          <FaQuoteLeft className="text-red-900 w-10 h-10 mr-8" />

          {/* Text */}
          <p className="text-center font-semibold mb-2 md:text-2xl text-gray-700">
            Join us in illuminating the world with the power of solar energy.
            Together, <br /> we can make a difference, one panel at a time.
          </p>

          {/* Right Quote */}
          <FaQuoteRight className="text-red-900 w-10 h-10 ml-8" />
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:p-4 max-w-lg">
            {/* Image */}
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
              alt="Placeholder"
              className="w-full h-auto rounded-tr-2xl"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold justify-start text-red-900">
                N. K. Trimurataya
              </h3>
              <p className="text-black-600 font-bold justify-start">
                Director, TVs & sons
              </p>
            </div>
          </div>
        </div>
        <img src={City} alt="" className="" />
      </div>

      {/* section fourth */}
      <div className="bg-white flex flex-col items-center pb-12">
        <h2 className="p-3 md:text-4xl text-center font-bold text-gray-800 mb-8">
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
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

            <div className="flex flex-col justify-end p-2 flex-grow relative z-10">
              <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                Innovative Technology
              </h3>
              <p className="text-white  bg-gradient-to-t from-red-800 to-transparent  z-0">
                To make solar energy accessible to everyone and provide tangible
                solutions that contribute to the global fight against climate
                change
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
            style={{ backgroundImage: `url(${solarPanel3})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

            <div className="flex flex-col justify-end p-2 flex-grow relative z-10">
              <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                Solar System
              </h3>
              <p className="text-white bg-gradient-to-t from-red-800 to-transparent  z-0">
                Solar Ark empowers individuals, organizations, and communities
                to embrace eco-friendly practices and become leaders in
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fifth section */}
      <div className="bg-[#ce786fd4] flex flex-col py-12">
        <div className="flex flex-col md:flex-row overflow-hidden">
          {/* Left Column - Image */}
          <div className="flex w-full justify-center md:w-4/12 order-2 md:order-1">
            <img
              src={busimage} // Replace 'yourImagePath' with the actual path of the image
              alt="Left Column"
              className="w-full h-auto object-cover md:w-full md:h-auto"
            />
          </div>

          {/* Right Column - Icons */}
          <div className="flex justify-center md:justify-end items-center w-full md:w-8/12 order-1 md:order-2 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Icon 1 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={Image1} // Replace with the correct image path
                    alt="Commercial Project Icon"
                    className="w-20 h-20 imgpanel2"
                  />
                </div>
                <div ref={countUpRef}>
                  <p className="mt-2 text-center md:text-2xl font-medium">
                    {inView && (
                      <CountUp start={0} end={200} duration={2} separator="," />
                    )}
                    +
                  </p>
                </div>
                <p className="font-bold">Commercial project</p>
              </div>

              {/* Icon 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={Image2} // Replace with the correct image path
                    alt="Years Icon"
                    className="w-20 h-20"
                  />
                </div>
                <p className="mt-2 text-center md:text-2xl font-medium">
                  {inView && (
                    <CountUp start={0} end={100} duration={2} separator="," />
                  )}
                  +
                </p>
                <p className="font-bold">Years</p>
              </div>

              {/* Icon 3 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={Image3} // Replace with the correct image path
                    alt="Installation Experience Icon"
                    className="w-20 h-20"
                  />
                </div>
                <p className="mt-2 text-center md:text-2xl font-medium">
                  {inView && (
                    <CountUp start={0} end={130} duration={2} separator="," />
                  )}{" "}
                  MWp
                </p>
                <p className="font-bold">Installation experience</p>
              </div>

              {/* Icon 4 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={Image4} // Replace with the correct image path
                    alt="Savings Icon"
                    className="w-20 h-20"
                  />
                </div>
                <p className="mt-2 text-center md:text-2xl font-medium">
                  {inView && (
                    <CountUp start={0} end={140} duration={2} separator="," />
                  )}{" "}
                  cr
                </p>
                <p className="font-bold">Saving annually</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section seventh */}
      <div className="bg-white flex flex-col items-center p-3 py-12">
        <h2 className="md:text-4xl mt-10  text-center font-bold text-gray-800 mb-8">
          Exceptional quality. End-to-end service. Delighted customers
        </h2>
        <div className="flex md:mt-10 flex-col md:flex-row border rounded-3xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex-[1] h-36 md:h-auto">
            <img
              src={solarPanel2}
              alt="solarPanel1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-[2] text-white bg-red-900 p-6">
            <h2 className="text-2xl font-bold mb-4">
              environmental responsibility
            </h2>
            <p className="mb-6">
              At Solar Ark, we are pioneers in the solar energy revolution,
              dedicated to providing innovative, cost-effective, and sustainable
              solar solutions to homes, businesses, and industries across the
              globe. We believe that renewable energy is the key to building a
              brighter, more sustainable future, and we are committed to
              delivering clean, reliable energy solutions that reduce carbon
              footprints and promote environmental responsibility.
            </p>
            <div>
              <p className="text-center">
                You can write as much as needed here.
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex mt-5 flex-col md:flex-row border rounded-3xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          {/* Image Section */}
          <div className="flex-[1] h-36 md:h-auto">
            <img
              src={solarPanel3}
              alt="solarPanel1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-[2] bg-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Solar Systems
            </h2>
            <p className="text-black mb-6">
              With a focus on quality, efficiency, and customer satisfaction, we
              ensure that each solar solution is tailored to the unique needs of
              our clients. Whether you're looking to reduce your home’s energy
              costs, transition your business to renewable power, or implement
              large-scale solar systems in industrial facilities, Solar Ark is
              here to guide you every step of the way.
            </p>
            <p className="text-center">You can write as much as needed here.</p>
          </div>
        </div>
        <FaAngleUp className="text-red-900 text-2xl my-6" />
      </div>
      <div className="bg-white flex flex-col items-center p-3 py-12 border-b border-gray-300">
        {/* Horizontal Line */}
        <div className="w-full border-t px-4 border-gray-300 mb-4"></div>

        {/* Content */}
        <div className="flex justify-between w-full px-4">
          {/* Read More Text */}
          <div className="text-red-900 font-semibold md:text-2xl">
            Read more...
          </div>

          {/* Icon */}
          <FaAngleUp className="text-red-900 text-2xl" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
