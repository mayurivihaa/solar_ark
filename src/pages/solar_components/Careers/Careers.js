import React, { useState, useEffect } from "react";
import busimage from "../../../assets/images/bus.png";

const Careers = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [showBus, setShowBus] = useState(true);
    const sentence = "The bus is moving synchronously with this text.";

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

    return (
        <>
            {/* Parent Container for Bus and Text */}
            <div className="relative w-88 h-32 md:bg-gradient-to-b from-black to-white mb-10"></div>
            <div className="flex justify-center items-center">
                {/* Moving Bus Container */}
                {/* <div className="relative w-full">

                    <div className="position-relative text-center z-10"> */}
                {/* <div className="fw-bold text-primary text-animation">
                            {sentence.slice(0, textIndex)}
                        </div> */}
            </div>

            {/* {showBus && (
                        <img
                            src={busimage}
                            alt="Moving Bus"
                            className="bus-animation absolute top-1/2 transform -translate-y-1/2 w-20"
                        />
                    )} */}
            {/* </div>
            </div> */}

            {/* Card Section (for the login form) */}
            <div className="max-w-md mx-auto mb-6 bg-white rounded-lg shadow-lg p-6">
                <h5 className="text-center text-2xl font-bold text-gray-800">Login</h5>
                <form>
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
                            placeholder="Enter your name"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                            placeholder="Enter your email"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                            placeholder="Enter your password"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
