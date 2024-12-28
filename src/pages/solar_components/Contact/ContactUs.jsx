import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [formData2, setFormData2] = useState({
    name: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contactForm",
        formData2
      );
      console.log(formData2);

      alert(response.data.message);
      setFormData2({
        name: "",
        email: "",
        subject: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };
  return (
    <>
      <div className="relative h-40 sm:h-28 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
      <div className="lg:px-12 py-8 sm:py-12 m-4">
        <h1 className="text-1xl sm:text-3xl md:text-4xl font-semibold sm:px-2">
          Contact Us
        </h1>
        <div className="grid grid-cols-3 gap-6 mt-5">
          {/* First Column: Smaller Width */}
          <div className="col-span-1 shadow-lg bg-[#D15A33]">
            <div className="card transition-transform duration-200 hover:scale-105 text-white min-h-60">
              <div className="card-body">
                <h2 className="card-title">Registered Office</h2>
                <h2>Adani Corporate House</h2>
                <h2 className="card-text">
                  Shantigram, Near Vaishnodevi Circle, S G Highway,
                  Ahmedabad-382421, Gujarat, India.
                </h2>
                <p>Tel : +91-79-26565555</p>
              </div>
            </div>
          </div>

          {/* Second Column: Larger Width */}
          <div className="col-span-2 shadow-lg">
            <div className="card border rounded-none">
              <div className="card-body transition-transform duration-200 hover:scale-105">
                <h2 className="card-title">Operating Offices</h2>
                <p className="font-bold mt-2">Mundra</p>
                <p>
                  Village Tunda & Siracha, Taluka Mundra, Mundra, Kutch 370 435,
                  Gujarat, India
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <p>Tel : +91-79-26565555</p>
                  <p>Tel : +91-79-26565555</p>
                </div>
                <p className="font-bold mt-2">Mundra</p>
                <p>
                  NH 90, Atru Road, Village Kawai, Taluka Atru, Baran 325 219,
                  Rajasthan, India Tel : +91 7451 24 5910
                </p>
                <p className="font-bold mt-2">Mundra</p>
                <p>
                  (A Subsidiary of Adani Power Limited), Lotus Tower, 1st Floor,
                  34, Devaraja Urs Road, Race Course, Bangalore 560 001,
                  Karnataka, India
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <p>Tel : +91-79-26565555</p>
                  <p>Tel : +91-79-26565555</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="p-1 lg:py-12 font-bold text-2xl mb-2">
              Write to Us
            </div>
          </div>

          <div className="container border px-3 py-3">
            <form onSubmit={handleSubmit} className="sm:mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="shadow-lg w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData2.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="shadow-lg w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData2.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="subject"
                  className="shadow-lg form-select w-full text-gray-400 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // aria-label="Default select example"
                  value={formData2.subject}
                  onChange={handleChange}
                  required
                >
                  <option>Subject of message</option>
                  <option value="1">General Inquiry</option>
                  <option value="2">Bussiness</option>
                  <option value="3">Media</option>
                  <option value="3">Website Feedback</option>
                  <option value="3">Investors</option>
                </select>

                <input
                  type="number"
                  placeholder="Contact Number"
                  name="contactNumber"
                  className="shadow-lg w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData2.contactNumber}
                  onChange={handleChange}
                  require
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <textarea
                  className="shadow-lg form-control w-full px-4 py-3 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={formData2.message}
                  onChange={handleChange}
                  require
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="mt-3 border p-2 font-bold bg-slate-100 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
