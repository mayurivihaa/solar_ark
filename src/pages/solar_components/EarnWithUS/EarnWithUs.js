import React, { useEffect, useState } from "react";
import solarPanel3 from "../../../assets/images/solar-panel3.jpeg";
import solarPanel4 from "../../../assets/images/solar-panel4.jpg";
// import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import pune from "../../../assets/images/pune.jpg";

const EarnWithUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: `${process.env.PUBLIC_URL}/assets/solar_images/newslide1.png`, alt: 'Solar Panel 1' },
        // { src: `${process.env.PUBLIC_URL}/assets/solar_images/newslide2.png`, alt: 'Solar Panel 2' },
        { src: `${process.env.PUBLIC_URL}/assets/solar_images/newslide3.png`, alt: 'Solar Panel 3' },
    ];


    // Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3000ms (3 seconds)

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);


    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Add 'visible' class
                        observer.unobserve(entry.target); // Stop observing after it's visible
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold for when to trigger animation
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <>
            <div className="relative h-screen ">
                {/* Carousel */}
                <div className="absolute  inset-0 z-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/solar_images/newslide1.png`}
                        alt="Slide"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Carousel Overlay Content */}
                <div className="absolute inset-0 pt-48 carousel-text bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-4xl font-bold">
                        Welcome to <span className="text-[#D15A33]">SolarArk</span>
                    </h1>
                    <h1 className="text-4xl md:text-4xl font-bold">
                        Empowering Communities with Solar Energy
                    </h1>
                    <p className="mt-6 text-md  text-gray-300">
                        The Surya Mitra program, an initiative by SolarARK, aims to bring
                        solar rooftops to every home and empower individuals to contribute
                        to a greener planet.
                    </p>
                    <p className="text-md text-gray-300">
                        This campaign creates a network of enthusiastic individuals,
                        business owners, and entrepreneurs to promote solar energy solutions
                    </p>
                    <p className="text-md  text-gray-300">
                        while fostering self-reliance and entrepreneurship.
                    </p>
                    <a
                        href="/contact"
                        className="mt-8 bg-[#D15A33] text-white py-4 px-6 rounded-md"
                    >
                        Get quote
                    </a>
                </div>
            </div>

            {/* who can join */}

            <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Images */}
                <div className="relative flex justify-center lg:w-1/2 w-full lg:pl-16 mobile-section">
                    {/* Top Image */}
                    <div className="relative z-10 w-52 sm:w-60 lg:w-80 h-32 sm:h-40 lg:h-64 right-8 sm:right-16 lg:right-32 rounded-lg overflow-hidden shadow-lg top-image3">
                        <img src={solarPanel4} alt="Solar Panel 1" className=" lg:h-full" />
                    </div>

                    {/* Bottom Image */}
                    <div className="absolute z-20 top-12 sm:top-16 lg:top-32 left-8 sm:left-16 lg:left-56 w-56 sm:w-64 lg:w-72 h-36 sm:h-44 lg:h-52 border-4 sm:border-8 border-white rounded-lg overflow-hidden bottom-image4">
                        <img
                            src={solarPanel3}
                            alt="Solar Panel 2"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Who can <span className="text-orange-600">join?</span>
                    </h2>
                    <p className="text-gray-600 font-bold mb-6">
                        Anyone passionate about making a difference can become a Surya
                        Mitra, including:
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-[10px] text-orange-600" />
                            <span>Electricians, plumbers, and AC fitters</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            {/* <FaCheckCircle className="text-orange-600" />
                            <span>Battery Storage Solutions</span> */}
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-orange-600 text-[10px]" />
                            <span>Shopkeepers, students, and travel agents</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center lg:justify-start">
                            {/* <FaCheckCircle className="text-orange-600" />
                            <span>24 X 7 Call & Chat Support</span> */}
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-orange-600 text-[10px]" />
                            <span>Grocery store owners, cable operators, and more!</span>
                        </div>
                    </div>
                </div>


            </div>
            {/* how to join */}
            <div className="flex md:my-12 flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 bg-red-900  space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Text Content */}
                <div className="lg:w-1/2 fade-in  text-white text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        How to <span className="text-orange-600">join?</span>
                    </h2>
                    <p className="text-white font-bold mb-6">
                        Register today with simple documents like an ID card, photo, and
                        bank details. Upon joining, receive a welcome kit with:
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-[10px] text-orange-600" />
                            <span>A welcome letter, pen, and flyers.</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-orange-600 text-[10px]" />
                            <span>Branding materials like posters and visiting cards.</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-orange-600 text-[10px]" />
                            <span>Access to exclusive training and workshops.</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-start lg:justify-start">
                            <FaCircle className="text-orange-600 text-[10px]" />
                            <span>Digital marketing support, and incentives.</span>
                        </div>
                    </div>
                </div>
                {/* image carousel */}
                <div className="relative fade-in flex justify-center items-center w-full">
                    {/* <!-- Top Image --> */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={solarPanel4}
                            alt="Solar Panel 1"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                    {/* <!-- Bottom Image --> */}
                </div>
            </div>
            {/* new section */}
            <div>
                <div className="container mt-5 mb-5 md:my-10 mx-auto px-4">
                    <div className="text-center mb-6 font-bold md:text-4xl text-2xl">
                        Benefits of Joining the{" "}
                        <span className="text-orange-600">Surya Mitra Network</span>
                    </div>

                    {/* <!-- First Column: Grid Layout --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:my-12">
                        <div className="relative flex justify-center items-center w-full">
                            {/* <!-- Top Image --> */}
                            {/* <div className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={solarPanel4}
                                    alt="Solar Panel 1"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div> */}
                            <div id="imageCarousel" className="relative">
                                <div className="carousel-inner">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="object-cover w-90 h-90 rounded-lg shadow-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <!-- Bottom Image --> */}
                        </div>

                        {/* <!-- Right Column: Text Content --> */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Monetary Incentives</h3>
                                <p>Earn commissions for every successful lead you provide.</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Training and Support</h3>
                                <p>Regular webinars, meetings, and training on solar trends.</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Marketing Tools</h3>
                                <p>
                                    Access to digital campaigns, branding materials, and financial
                                    tie-up support.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                                <p>
                                    Join WhatsApp groups and participate in monthly schemes and
                                    webinars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EarnWithUs;
