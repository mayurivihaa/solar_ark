import React, { useState, useEffect } from "react";
import axios from "axios";
import busimage from "../../../assets/images/bus.png";

const Careers = () => {
    const [careerData, setCareerData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCareerData({ ...careerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/careers",
                careerData
            );
            //console.log(response.careerData);

            alert(response.data.message);
            setCareerData({
                name: "",
                email: "",
                password: ""

            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form");
        }
    };

    return (
        <>
            {/* Parent Container for Bus and Text */}
            <div className="relative w-88 h-32 md:bg-gradient-to-b from-black to-white mb-10"></div>
            {/* <div className="flex justify-center p-4 items-center">
            </div> */}
            {/* Card Section (for the login form) */}
            <div className="max-w-md mx-auto  md:mb-16 bg-white rounded-lg shadow-lg p-6">
                <h5 className="text-center text-2xl font-bold text-gray-800">Login</h5>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={careerData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={careerData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={careerData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="h-4 w-4 text-red-900 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-red-900 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-900 hover:bg-red-700 text-white py-2 px-4 rounded text-sm font-medium"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Careers;
