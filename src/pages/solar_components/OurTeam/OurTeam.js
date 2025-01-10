import React from "react";
import LocationIcon from "../../../assets/images/location.png";
import { FaLinkedin } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import solarPanel4 from "../../../assets/images/solar-panel4.jpg";
import {
    FaHandshake,
    FaSolarPanel,
    // FaSmile,
    FaHome,
    FaBuilding,
} from "react-icons/fa";
import House from "../../../assets/images/House.png";
import Panel from "../../../assets/images/panel.png";
import panel2 from "../../../assets/images/solar-panel2.jpeg";
import panel4 from "../../../assets/images/solar-panel4.jpg";
import Search from "../../../assets/images/search.png";
import pune from "../../../assets/images/pune.jpg";
import aurangabad from "../../../assets/images/aurangabad.jpg";
import journy from "../../../assets/images/ourjurney (1).png";
import logo1 from "../../../assets/images/logo (1).png";
import logo from "../../../assets/images/logo.png";
import logo2 from "../../../assets/images/logo (2).png";
import logo3 from "../../../assets/images/logo (3).png";
import logo4 from "../../../assets/images/logo (4).png";


const OurTeam = () => {
    const milestones = [
        {
            year: "105+",
            text: "Delighted commercial Businesses",
            icon: <FaSolarPanel size={32} />,
        },
        {
            year: "170+",
            text: "Satisfied Housing Society",
            icon: <FaHandshake size={32} />,
        },
        // { year: "10000+", text: "Happy Customers", icon: <FaSmile size={32} /> },
        { year: "100+", text: "Client Solarised", icon: <FaHome size={32} /> },
        { year: "2015", text: "SRK began", icon: <FaBuilding size={32} /> },
    ];

    const pathRef = useRef(null);
    const [positions, setPositions] = useState([]);
    useEffect(() => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            const segmentCount = milestones.length;

            // Handle edge cases
            if (segmentCount === 1) {
                const startPoint = pathRef.current.getPointAtLength(0);
                setPositions([{ x: startPoint.x, y: startPoint.y + 230 }]);
                return;
            }

            const newPositions = Array.from({ length: segmentCount }).map((_, i) => {
                const point = pathRef.current.getPointAtLength(
                    (i / segmentCount) * pathLength // Ensure no division by zero
                );

                return { x: point.x - 90, y: point.y + 50 };
            });

            setPositions(newPositions);
        }
    }, [milestones.length]);



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
            <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
            <div className="min-h-screen md:pt-2 bg-white-100">
                <div>
                    <h1 className="text-center text-2xl md:text-5xl font-semibold px-2 md:py-5">
                        Meet Our Team
                    </h1>
                </div>
                <div className="grid grid-cols-1 fade-in  md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* second card */}
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded  overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* our team */}
                <div className="grid grid-cols-1 fade-in md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* second card */}
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded  overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 fade-in md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-2xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* second card */}
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded  overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full  h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 fade-in md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* second card */}
                    <div className="bg-white rounded overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded  overflow-hidden max-w-sm mx-auto">
                        <div className="bg-white  rounded-tr-3xl overflow-hidden max-w-sm mx-auto">
                            {/* Image Section */}
                            <div className="w-full bg-green-400 h-49">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3M5My1wYS01Nzk4LWpvYjEyNzMucG5n.png" // Replace with actual image URL
                                    alt="John Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex justify-between items-center p-4">
                                <div>
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-grey-300">Co-founder</p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/johndoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center fade-in mb-6">
                    <h1 className="font-semibold text-2xl md:text-5xl md:mt-10 mb-10">
                        We make <span className="text-[#eb9288d4]">rooftop solar </span>with
                        intigrity
                    </h1>
                    <p className="mt-3 px-2 md:text-2xl">
                        solar is a team of 700+ enginners, MBAs, scientiest, creative
                        thinkers driven by the single <br /> vision of asselarating adaption
                        of solar india it is an hounor to be
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-6 lg:px-10">
                    {/* First Column */}
                    <div className="fade-in">
                        <img
                            src={pune}
                            className="mx-auto h-[400px]  object-cover shadow-1-strong rounded-lg mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                        <img
                            src={panel4}
                            className="mx-auto w-full h-auto shadow-1-strong rounded-lg"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    {/* Second Column */}
                    <div className="fade-in">
                        <img
                            src={panel4}
                            className="mx-auto w-full h-auto shadow-1-strong rounded-lg mb-4"
                            alt="Boat on Calm Water"
                        />
                        <img
                            src={pune}
                            className="mx-auto h-[400px]  shadow-1-strong rounded-lg"
                            alt="Mountains in the Clouds"
                        />
                    </div>

                    {/* Third Column */}
                    <div className="fade-in">
                        <img
                            src={panel4}
                            className="mx-auto w-full h-auto shadow-1-strong rounded-lg mb-4"
                            alt="Waves at Sea"
                        />
                        <img
                            src={aurangabad}
                            className="mx-auto h-[400px] shadow-1-strong rounded-lg"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>

                <div className="md:mt-12 pb-3 pt-4">
                    <div className="text-center fade-in mb-6">
                        <h1 className="font-semibold text-2xl md:text-5xl">
                            Pioneering solar excellence : <br />
                            Our vission in action
                        </h1>
                        <p className="my-7 px-3 md:text-2xl">
                            By joining Solar Ark, you not only advance your career but also become <br /> a part of a global movement committed to sustainability and positive environmental impact.

                        </p>

                        {/* card */}
                        <div className="md:mt-10 fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                            <div className="p-6 fade-in bg-[#D15A33] text-white flex flex-col border items-center relative overflow-hidden">
                                <div className="text-4xl solar-colour">
                                    <img src={House} className="imgpanel" alt="" />
                                </div>
                                <p className="md:my-6 border p-3 rounded md:text-[20px]">
                                    Discover the future of energy with Solar Ark’s advanced solar
                                    panel systems. We offer reliable, affordable, and efficient
                                    solar solutions designed to reduce your energy expenses and
                                    help the planet.
                                </p>
                            </div>

                            <div className="p-6 fade-in bg-[#D15A33] text-white  flex border flex-col items-center relative overflow-hidden">
                                <div className="text-4xl solar-colour">
                                    <img src={Panel} className="imgpanel" alt="" />
                                </div>
                                <p className="md:my-6 border p-3  rounded md:text-[20px]">
                                    Harness the power of solar energy with Solar Ark’s
                                    cutting-edge solar panel technology. Whether you're a
                                    homeowner or a business, we deliver customized, cost-effective
                                    solutions that provide clean, sustainable energy.
                                </p>
                            </div>

                            <div className="p-6 fade-in bg-[#D15A33] text-white  flex border flex-col items-center relative overflow-hidden">
                                <div className="text-4xl solar-colour">
                                    <img src={Search} className="imgpanel" alt="" />
                                </div>
                                <p className="md:my-6 border p-3 rounded md:text-[20px]">
                                    Solar Ark is leading the charge in sustainable energy by
                                    providing innovative solar panel solutions for homes,
                                    businesses, and communities. We’re here to help you reduce
                                    your carbon footprint and communit.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                    </div>
                </div>
                {/* wave section */}

                <div>
                    <h1 className="text-center fade-in text-2xl md:text-5xl md:my-10 sm:mb-8 font-semibold">
                        Our Journey
                    </h1>

                    <div className="min-h-screen mobile-curve mb-6 bg-white relative flex justify-center items-center gap-4">
                        {/* SVG Wave Path (hidden on mobile) */}
                        <svg
                            className="absolute inset-0 w-full h-full hidden md:block"
                            viewBox="0 0 240 50"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 25 
                            C 20 5, 40 45, 60 25 
                            C 80 5, 70 45, 120 25 
                            C 140 5, 160 45, 180 15 
                            C 200 5, 220 45, 240 25"
                                fill="transparent"
                                stroke="rgba(0, 0, 0, 0.8)"
                                strokeWidth="0.4"
                                strokeDasharray="1, 2"
                            />
                        </svg>

                        {/* Icons */}
                        <div className="absolute h-screen mb-8 flex w-full flex-col md:flex-row justify-around  md:px-8 items-center">
                            {/* Icon 1 */}
                            <div className="flex flex-col items-center md:mb-8">
                                <img src={logo} alt="" />
                                <p className="mt-2 text-center text-sm font-bold">2015</p>
                                <p className="font-bold">SolarARK began</p>
                            </div>

                            {/* Icon 2 */}
                            <div className="flex flex-col items-center md:mb-0">
                                <img src={logo1} alt="" />
                                <p className="mt-2 text-center text-sm font-medium">100+</p>
                                <p className="font-bold">Client Solarised</p>
                            </div>

                            {/* Icon 3 */}
                            <div className="flex flex-col items-center md:mb-0">
                                <img src={logo2} alt="" />
                                <p className="mt-2 text-center text-sm font-medium">18000+</p>
                                <p className="font-bold">Happy Customers</p>
                            </div>

                            <div className="flex flex-col items-center md:mb-0">

                                <img src={logo3} alt="" />
                                <p className="mt-2 text-center text-sm font-medium">170+</p>
                                <p className="font-bold">Statisfied Housing Socities</p>
                            </div>

                            {/* Icon 4 */}
                            <div className="flex flex-col items-center md:mb-0">
                                <img src={logo4} alt="" />
                                <p className="mt-2 text-center text-sm font-medium">105+</p>
                                <p className="font-bold">Delighted Commercial Businesses</p>
                            </div>

                            {/* Icon 5 */}
                        </div>
                    </div>

                    <div className="h-80 curve-desktop bg-white relative flex justify-center items-center">
                        <img src={journy} alt="" className="mb-5 fade-in" />

                        {/* SVG Path */}
                        {/* <svg
                            width="1200"
                            height="500"
                            viewBox="0 0 1200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute"
                        >
                            <path
                                ref={pathRef}
                                d="M1434.07 9.42933H1426.38H1409.74L1391.81 11.5634L1369.62 13.6974L1346.14 17.1118L1325.23 23.9407L1304.32 31.1964L1282.98 39.7325L1262.49 48.6954L1242.86 58.9387L1223.22 69.6089L1203.16 80.7058L1183.96 91.3759L1164.32 102.046L1143.84 112.289L1123.35 122.106L1102.44 129.788L1081.52 136.19L1058.9 141.739L1037.56 144.3H1014.94L992.749 141.739L970.128 137.044L948.361 131.069L927.448 122.96L906.961 114.423L886.901 104.607L866.842 94.3636L846.355 83.6934L827.149 73.0233L813.064 65.7676L799.833 58.9387L784.895 51.2562L771.664 44.0006L758.86 37.5985L746.056 31.1964L725.996 22.2335L705.082 14.551L683.315 8.14891L661.548 5.16128L638.928 3.88086L616.734 5.16128L594.54 8.14891L572.773 14.551L551.432 21.3799L530.092 29.0624L509.179 38.4521L499.362 42.7201L482.717 49.549L467.352 57.2315L452.414 66.1944L428.939 78.145L409.306 88.3883L389.246 99.0584L368.76 109.302L348.7 119.118L329.067 129.362L308.58 138.325L288.094 147.287L266.753 154.97L244.986 161.799L223.646 168.201L201.879 172.896L178.831 177.164L157.491 179.298L135.297 181.432L111.396 183.139H89.2023H66.5816L43.5341 180.578L21.7671 176.737L0 171.615"
                                stroke="black"
                                strokeWidth="5.97527"
                                strokeDasharray="10.61 10.61"
                                transform="scale(0.9)" // Scale down by 80%
                            />
                        </svg>

                        {/* Milestone Icons */}
                        {positions.map((pos, index) => (
                            <div
                                key={index}
                                className="absolute flex flex-col items-center"
                                style={{
                                    left: `${pos.x}px`,
                                    top: index == 3 ? `${250}px` : `${136}px`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div className="w-20 h-20 bg-white shadow-lg text-red-900 rounded-full flex items-center justify-center">
                                    {milestones[index].icon}
                                </div>
                                <p className="mt-2 text-center text-sm font-bold">
                                    {milestones[index].year}
                                </p>
                                <p className="text-center font-medium">
                                    {milestones[index].text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
