import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    pinCode: "",
    city: "",
    electricBill: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      alert(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        pinCode: "",
        city: "",
        electricBill: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-red-800">
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/assets/solar_images/form.avif`}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-red-900 opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-lg px-6 sm:px-8 py-8 sm:py-12 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          Book FREE <br /> consultation!
        </h1>
        <p className="mt-2 text-center text-gray-200 text-xl sm:text-base">
          Connect with our solar experts for honest, professional
        </p>
        <p className="text-center text-gray-200 text-xl sm:text-base">
          advice tailored to your needs
        </p>

        <form className="mt-6 sm:mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className="w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Pin code"
              name="pinCode"
              className="w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              className="w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <select
              name="electricBill"
              value={formData.electricBill}
              onChange={handleChange}
              className="w-full px-4 text-grey-700 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="" disabled>
                Monthly Electric Bill
              </option>
              <option value="100">$100</option>
              <option value="200">$200</option>
              <option value="300">$300</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-2/3 py-3 get-consultation-btn  text-center lg:ms-36 text-red-700 bg-white rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Get Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
