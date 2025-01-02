import React from 'react'
import LocationIcon from '../../../assets/images/location.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Services = () => {
    return (
        <>
            <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header">
            </div>
            <div className="min-h-screen pt-6 bg-white-100">
                <div className="text-center  mb-6">
                    <h1 className='font-semibold md:text-5xl mt-10 mb-10'>We make <span className='text-[#eb9288d4]'>rooftop solar </span>with intigrity</h1>
                    <p className='mt-3 md:text-2xl'>solar is a team of 700+ enginners, MBAs, scientiest, creative thinkers driven by the single <br /> vision of asselarating adaption of solar india it is an hounor to be</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 px-4 md:px-6 lg:px-10">
                    {/* First Column */}
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            className="max-w-[90%]  mx-auto aspect-[3/4] object-cover shadow-1-strong rounded-lg mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="max-w-[90%] mx-auto h-auto  shadow-1-strong rounded-lg"
                            alt="Boat on Calm Water"
                        />


                    </div>

                    {/* Second Column */}
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="max-w-[90%] mx-auto h-auto shadow-1-strong rounded-lg mb-4"
                            alt="Boat on Calm Water"
                        />
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            className="max-w-[90%] mx-auto h-auto shadow-1-strong rounded-lg"
                            alt="Mountains in the Clouds"
                        />

                    </div>

                    {/* Third Column */}
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            className="max-w-[90%] mx-auto h-auto shadow-1-strong rounded-lg mb-4"
                            alt="Waves at Sea"
                        />
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            className="max-w-[90%] mx-auto h-auto shadow-1-strong rounded-lg"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
                <div className='mt-12 pb-3 pt-4'>
                    <div className="text-center mb-6">
                        <h1 className='font-semibold md:text-5xl'>pioneering solar excellence : <br />Our vission in action</h1>
                        <p className='mt-7 md:text-2xl'>solar is a team of 700+ enginners, MBAs, scientiest, creative thinkers driven by the single <br /> vision of asselarating adaption of solar india it is an hounor to be</p>

                        {/* card */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                            <div className="p-6 flex flex-col items-center relative overflow-hidden">
                                <div className="text-8xl solar-colour">
                                    <img src={LocationIcon} className="" alt="" />
                                </div>
                                <p className="mb-6 md:text-[20px]">
                                    We Utilize The Latest Advancements In Solar Technology To Deliver
                                    Performance And Durability.
                                </p>
                            </div>

                            <div className="p-6 flex flex-col items-center relative overflow-hidden">
                                <div className="text-8xl solar-colour">
                                    <img src={LocationIcon} className="" alt="" />
                                </div>
                                <p className="mb-6 md:text-[20px]">
                                    We Utilize The Latest Advancements In Solar Technology To Deliver
                                    Performance And Durability.
                                </p>
                            </div>

                            <div className="p-6 flex flex-col items-center relative overflow-hidden">
                                <div className="text-8xl solar-colour">
                                    <img src={LocationIcon} className="" alt="" />
                                </div>
                                <p className="mb-6 md:text-[20px]">
                                    We Utilize The Latest Advancements In Solar Technology To Deliver
                                    Performance And Durability.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        <div>
                            <h1 className='text-center md:text-5xl font-semibold px-2 my-10'>Meet Our Team</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">

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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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

                                <div className="bg-white  rounded-tr-2xl overflow-hidden max-w-sm mx-auto">
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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
                                            <p className='text-grey-300'>Co-founder</p>
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


                    </div>
                </div>
                {/* wave section */}


                <div>
                    <h1 className="text-center md:text-5xl font-semibold">Our Journey</h1>

                    <div className="min-h-screen pt-6 bg-white relative flex justify-center items-center">
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
                        <div className="absolute flex w-full flex-col md:flex-row justify-around px-4 md:px-8 items-center">
                            {/* Icon 1 */}
                            <div className="flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-24 h-24 bg-white shadow-xl text-red-900 rounded-full flex items-center justify-center">
                                    <FaTwitter size={32} />
                                </div>
                                <p className="mt-2 text-center text-sm font-bold">2015</p>
                                <p className="font-bold">SolarARK began</p>
                            </div>

                            {/* Icon 2 */}
                            <div className="flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-24 h-24 bg-white shadow-xl text-red-900 rounded-full flex items-center justify-center">
                                    <FaTwitter size={32} />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium">2016</p>
                                <p className="font-bold">First milestone</p>
                            </div>

                            {/* Icon 3 */}
                            <div className="flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-24 h-24 bg-white shadow-xl text-red-900 rounded-full flex items-center justify-center">
                                    <FaTwitter size={32} />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium">2017</p>
                                <p className="font-bold">New expansion</p>
                            </div>

                            {/* Icon 4 */}
                            <div className="flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-24 h-24 bg-white shadow-xl text-red-900 rounded-full flex items-center justify-center">
                                    <FaTwitter size={32} />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium">2018</p>
                                <p className="font-bold">Partnerships</p>
                            </div>

                            {/* Icon 5 */}
                            <div className="flex flex-col items-center mb-4">
                                <div className="w-24 h-24 bg-white shadow-xl text-red-900 rounded-full flex items-center justify-center">
                                    <FaTwitter size={32} />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium">2020</p>
                                <p className="font-bold">Global growth</p>
                            </div>
                        </div>
                    </div>
                </div>










            </div>


        </>
    )
}

export default Services
