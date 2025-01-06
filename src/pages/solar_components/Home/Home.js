import React from 'react'
import Aurangabad from "../../../assets/images/aurangabad.png";
import BottomPanel from "../../../assets/images/bottom-right.png";
import pune from "../../../assets/images/pune.jpg";
import solarpanel from "../../../assets/images/solar-panel1.jpg";

const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                {/* Full-width video section */}
                <div className="relative">
                    <img src={solarpanel} alt="" className="w-full h-full object-cover" />
                    {/* <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-[70vh] object-cover"
                        src={pune}
                        alt="Solar Video"
                    /> */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end md:justify-center">
                        <h1 className="text-white text-center text-4xl md:text-6xl font-bold mb-4 md:mb-0">
                            Solar Energy for a Brighter Future
                        </h1>
                    </div>

                </div>

                {/* Cards section */}
                <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={BottomPanel}
                            alt="Solar Panel 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Sustaineble Energy Innovations
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Solar Ark is leading the charge in sustainable energy by providing innovative solar panel solutions for homes, businesses, and communities. We’re here to help you reduce your carbon footprint and energy costs while embracing eco-friendly energy alternatives. Let’s work together to build a brighter, greener tomorrow powered by the sun.

                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={pune}
                            alt="Solar Energy 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Solar Power Utilization
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Harness the power of solar energy with Solar Ark’s cutting-edge solar panel technology. Whether you're a homeowner or a business, we deliver customized, cost-effective solutions that provide clean, sustainable energy. Join us in shaping a future that’s powered by the sun and driven by innovation.

                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={Aurangabad}
                            alt="Solar Energy 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Affordable Renewable Solutions
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Discover the future of energy with Solar Ark’s advanced solar panel systems. We offer reliable, affordable, and efficient solar solutions designed to reduce your energy expenses and help the planet. Embrace renewable energy today, and join the movement toward a more sustainable future.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

