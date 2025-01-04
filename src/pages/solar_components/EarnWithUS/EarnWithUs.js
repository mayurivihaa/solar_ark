import React from 'react';

const EarnWithUs = () => {
    return (
        <>
            <div>
                <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
                <div className="container mt-5 py-6 flex justify-center items-center">
                    <div className="card shadow-lg p-4 w-96">
                        <div className="card-body">
                            <h5 className="card-title text-center text-xl font-bold mb-4">Login</h5>
                            <form>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label block text-gray-700">Name</label>
                                        <input
                                            type="name"
                                            className="form-control block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <label htmlFor="email" className="form-label block text-gray-700">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="form-control block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            id="rememberMe"
                                        />
                                        <label htmlFor="rememberMe" className="form-check-label text-gray-700 ml-2">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-500 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full bg-red-900 hover:bg-red-700 text-white py-2 px-4 rounded"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EarnWithUs;
