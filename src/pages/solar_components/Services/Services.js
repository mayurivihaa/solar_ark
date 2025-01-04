// import React from "react";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import solarPanel3 from "../../../assets/images/solar-panel3.jpeg";
import solarPanel2 from "../../../assets/images/bottom-right.png";

const Services = () => {

    return (
        <>
            <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>

            <div className="bg-white flex flex-col items-center md:py-12">
                <h2 className="md:text-4xl text-center font-bold text-gray-800 mb-8">
                    Our Services
                </h2>
                <div className="h-[400px] my-6 grid solution-content grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-4">
                    {/* Service 1 */}
                    <div
                        className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
                        style={{ backgroundImage: `url(${solarPanel3})` }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

                        <div className="flex flex-col justify-end p-2 flex-grow relative z-10">
                            <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                                Homes
                            </h3>
                            <p className="text-white bg-gradient-to-t from-red-800 to-transparent z-0">
                                We Utilize The Latest Advancements In Solar Technology To Deliver Top-Of-The-Line Products That Offer Superior Performance And Durability.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div
                        className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
                        style={{ backgroundImage: `url(${solarPanel3})` }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

                        <div className="flex flex-col justify-end p-2 flex-grow relative z-10">
                            <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                                Housing Society
                            </h3>
                            <p className="text-white bg-gradient-to-t from-red-800 via-transparent to-transparent z-0">
                                We Utilize The Latest Advancements In Solar Technology To Deliver Top-Of-The-Line Products That Offer Superior Performance And Durability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Other Services */}
                <div className="h-[400px] mb-5 grid solution-content grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-4">
                    {/* Service 3 */}
                    <div
                        className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
                        style={{ backgroundImage: `url(${solarPanel3})` }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

                        <div className="flex flex-col justify-end p-2 flex-grow relative z-10">
                            <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                                Commercial
                            </h3>
                            <p className="text-white bg-gradient-to-t from-red-800 to-transparent z-0">
                                We Utilize The Latest Advancements In Solar Technology To Deliver Top-Of-The-Line Products That Offer Superior Performance And Durability.
                            </p>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div
                        className="flex flex-col justify-between h-full rounded-lg shadow-lg p-2 items-center border border-gray-400 relative overflow-hidden transition bg-cover bg-center"
                        style={{ backgroundImage: `url(${solarPanel3})` }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-transparent to-transparent z-0"></div>

                        <div className="flex flex-col mb-4 justify-end p-2 flex-grow relative z-0">
                            <h3 className="lg:text-3xl md:text-2xl font-semibold text-white mb-2">
                                Industrials
                            </h3>
                            <p className="text-white bg-gradient-to-t from-red-800 via-transparent to-transparent z-0">
                                We Utilize The Latest Advancements In Solar Technology To Deliver Top-Of-The-Line Products That Offer Superior Performance And Durability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Screen Section */}
            <div className="relative h-screen">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={solarPanel2}
                        alt="Slide"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Overlay Content Positioned Responsively */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white px-12 pb-8 justify-center items-center md:justify-end md:items-start z-10"
                >
                    <h1 className="m-0 text-4xl md:text-4xl font-bold text-center md:text-left">
                        India's top companies choose Solar Square
                    </h1>
                    <button className="mt-4 bg-red-900 text-white py-4 px-6 rounded-md">
                        Get A Quote
                    </button>
                </div>
            </div>

            {/* Third Section */}
            <div className="container mx-auto my-6 px-4 md:py-12 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* YouTube Video */}
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                            90% of customers recommend us <br /> to use solar ark
                        </h2>
                        <p className="mb-2">India's top companies choose Solar Square</p>
                        <div className="aspect-w-26 aspect-h-14">
                            <iframe
                                className="w-full h-full rounded-lg shadow-lg"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-col gap-6">
                        {/* Large Card */}
                        <div className="bg-red-900 rounded-lg shadow-lg p-6 flex-1 z-0">
                            <h3 className="text-lg text-white font-semibold mb-2">
                                Large Card
                            </h3>
                            <p className="text-white">
                                This is the large card. Add your content here, like an image, text, or other elements.
                            </p>
                        </div>
                        {/* Small Card */}
                        <div className="bg-[#eb9288d4] rounded-lg shadow-lg p-6 flex-1 z-10">
                            <h3 className="text-lg text-white font-semibold mb-2">
                                Small Card
                            </h3>
                            <p className="text-white">
                                This is the small card. It's perfect for shorter content or brief highlights.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;
