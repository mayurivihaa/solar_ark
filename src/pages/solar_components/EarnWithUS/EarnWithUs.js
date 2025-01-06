import React, { useState, useEffect } from 'react';

const EarnWithUs = () => {
    const [isCarMoved, setIsCarMoved] = useState(false); // Track car movement completion
    const [text, setText] = useState(""); // State for showing text one by one
    const sentence = "Experience the Journey with Us!"; // Text to display

    useEffect(() => {
        let textIndex = 0;

        // Function to show the text one letter at a time
        const textInterval = setInterval(() => {
            if (textIndex < sentence.length) {
                setText((prevText) => prevText + sentence[textIndex]);
                textIndex++;
            } else {
                clearInterval(textInterval); // Stop the interval once all text is displayed
            }
        }, 100); // Speed of letter appearance (100ms)

        // Trigger car movement and hide car/text after 5 seconds
        const timer = setTimeout(() => {
            setIsCarMoved(true); // Hide car and text after the animation ends
        }, 5000); // Animation duration (5 seconds)

        return () => {
            clearInterval(textInterval); // Clean up interval
            clearTimeout(timer); // Clean up timeout
        };
    }, []);
    return (
        <>

            <div className="relative w-88 h-32 md:bg-gradient-to-b from-black to-white mb-10"></div>

            {/* Card Section */}
            <div className="max-w-md mx-auto mb-5 bg-white rounded-lg shadow-lg p-6">
                <h5 className="text-center text-2xl font-bold text-gray-800 mb-6">Login</h5>
                <form>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-red-900 hover:underline">Forgot password?</a>
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


            {/* moving car */}

        </>
    );
};

export default EarnWithUs;
