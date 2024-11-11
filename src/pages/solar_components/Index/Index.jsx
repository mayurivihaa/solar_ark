import React, { useState, useEffect } from 'react'
import { IoHomeOutline, IoLocationOutline, IoRocketOutline } from 'react-icons/io5';
import { LiaIndustrySolid } from 'react-icons/lia';
import { TiDocumentText } from 'react-icons/ti';
import { FaLink, FaRegLightbulb } from "react-icons/fa";
import { IoIosCloudOutline } from 'react-icons/io';
import mumbaiImage from '../../../assets/images/mumbai.jpg'; // Adjust the path accordingly
import aurangabadImage from '../../../assets/images/aurangabad.jpg';
import puneImage from '../../../assets/images/pune.jpg';

const testimonials = [
    {
        name: "Rick Wright",
        text: "I was unsure about going solar initially, but SolarArk made the process so simple. From the consultation to installation, everything was handled professionally. Our electricity bill has reduced significantly, and we're proud to contribute to a cleaner environment. Highly recommended!",
        image: `${process.env.PUBLIC_URL}/assets/solar_images/client1.jpg`,
    },
    {
        name: "Mira Patel",
        text: "SolarArk provided exceptional service! The team was efficient and professional. Our solar panels are performing great, and we're seeing a significant drop in energy bills.",
        image: `${process.env.PUBLIC_URL}/assets/solar_images/client2.jpg`,
    },
    {
        name: "John Doe",
        text: "Fantastic experience with SolarArk! The entire process was smooth, and the team went above and beyond to ensure the installation was perfect.",
        image: `${process.env.PUBLIC_URL}/assets/solar_images/client.avif`,
    },
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [openQuestion, setOpenQuestion] = useState(null);

    // Use images from the public folder using process.env.PUBLIC_URL
    const slides = [
        `${process.env.PUBLIC_URL}/assets/solar_images/slide1.jpg`,
        `${process.env.PUBLIC_URL}/assets/solar_images/slide2.jpg`,
        `${process.env.PUBLIC_URL}/assets/solar_images/slide3.jpg`
    ];

    const steps = [
        { step: "Step 01", title: "Initial Consultation", description: "We begin with an in-depth consultation to assess your energy needs, property, and goals, ensuring we tailor a solar solution that suits you perfectly." },
        { step: "Step 02", title: "Site Assessment & Custom Design", description: "Our team conducts a detailed site inspection and customizes a solar system designed specifically for your property and energy requirements." },
        { step: "Step 03", title: "Proposal & Agreement", description: "Receive a comprehensive proposal outlining the system, costs, and installation timeline, followed by a clear agreement for the project." },
        { step: "Step 04", title: "Installation Preparation", description: "We handle all pre-installation arrangements, from scheduling to equipment procurement, ensuring a smooth and efficient process." },
        { step: "Step 05", title: "Installation", description: "Our expert installers set up your solar system with precision and care, ensuring optimal performance and aesthetic appeal." },
        { step: "Step 06", title: "System Testing", description: "After installation, we thoroughly test the system to ensure everything is working efficiently and meets our quality standards." },
        { step: "Step 07", title: "Activation & Training", description: "We activate your system and provide training, helping you understand its features and maximizing your benefits." },
        { step: "Step 08", title: "Post-Installation Support", description: "Our support doesn't stop at installation. We offer ongoing maintenance and support for a seamless solar experience." }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(steps.length / 4));
    };

    const StepCard = ({ step, title, description }) => (
        <div className="text-left bg-[#772E26] text-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-center text-xs lg:text-sm text-[#FFD1B9] mb-2">
                <span className="bg-[#FFD1B9] text-[#772E26] rounded-full w-6 h-6 flex items-center justify-center mr-2">{step.split(" ")[1]}</span>
                <span className="flex-grow border-t border-[#FFD1B9] mx-2"></span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm lg:text-base text-[#FFD1B9]">{description}</p>
        </div>
    );

    const toggleQuestion = (question) => {
        setOpenQuestion(openQuestion === question ? null : question);
    };
    const faqs = [
        {
            question: "What financing options are available?",
            answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        { question: "How they can help us?", answer: "Answer to this question." },
        { question: "How much is it cost?", answer: "Answer to this question." },
        {
            question: "They can work all over the city?",
            answer: "Answer to this question.",
        },
        { question: "When did they start this?", answer: "Answer to this question." },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // change slide every 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // change testimonial every 5 seconds
        return () => clearInterval(interval);
    }, []);




    return (
        <>
            <div className="relative h-screen ">
                {/* Carousel */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={slides[currentSlide]}
                        alt="Slide"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Carousel Overlay Content */}
                <div className="absolute inset-0 carousel-text bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Embracing Sustainable
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Living with <span className="text-orange-700">SolarArk</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                        Welcome to Solar Ark, your friend on the journey towards living with renewable energy.
                    </p>
                    <p className="text-lg md:text-xl text-gray-200">
                        As advocates for environment, we aim to empower communities to embrace eco-friendly
                    </p>
                    <p className="text-lg md:text-xl text-gray-200">
                        practices and renewable energy solutions
                    </p>
                    <button className="mt-6 bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
                        Contact us
                    </button>
                </div>
            </div>

            {/* Services */}
            <div className="py-14 bg-white services min-h-[400px]">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-black">
                        Our <span className="text-orange-700">Services</span>
                    </h2>
                </div>
                <div className="mt-8 service-content grid grid-cols-1 md:grid-cols-4 gap-9 px-4 md:px-16 min-h-[200px]">


                    <div className="p-8 bg-white shadow-lg  text-center border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <div className="text-6xl text-orange-700">
                                <IoHomeOutline />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black">Homes</h3>
                        <div className="mt-4 w-16 mx-auto border-b-2 border-orange-700"></div>
                    </div>
                    <div className="p-8 bg-white shadow-lg  text-center border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <div className="text-6xl text-orange-700">
                                <IoLocationOutline />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black">Housing Society</h3>
                        <div className="mt-4 w-16 mx-auto border-b-2 border-orange-700"></div>
                    </div>
                    <div className="p-8 bg-white shadow-lg  text-center border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <div className="text-6xl text-orange-700">
                                <LiaIndustrySolid />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black">Industrial</h3>
                        <div className="mt-4 w-16 mx-auto border-b-2 border-orange-700"></div>
                    </div>
                    <div className="p-8 bg-white shadow-lg  text-center border border-gray-400">
                        <div className="flex justify-center mb-4">
                            <div className="text-6xl text-orange-700">
                                <TiDocumentText />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black">Commercial</h3>
                        <div className="mt-4 w-16 mx-auto border-b-2 border-orange-700"></div>
                    </div>


                </div>
            </div>


            {/* Solutions */}
            <div className="bg-[#f9ebe5] flex flex-col items-center py-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Our <span className="text-[#d9531e]">Solutions</span>
                </h2>
                <div className="grid solution-content grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl px-4 ">
                    {/* Innovative Technology */}
                    <div className="rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-300 relative overflow-hidden hover:bg-orange-700 hover:text-white transition">
                        <h3 className="text-xl font-semibold mb-4 text-center">
                            Innovative Technology
                        </h3>
                        <p className="text-center mb-6">
                            We Utilize The Latest Advancements In Solar Technology To Deliver
                            Top-Of-The-Line Products That Offer Superior Performance And
                            Durability.
                        </p>
                        <IoRocketOutline className="text-4xl absolute bottom-4 right-4 transition group-hover:text-white" />
                    </div>

                    {/* Expert Team */}
                    <div className="rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-300 relative overflow-hidden hover:bg-orange-700 hover:text-white transition">
                        <h3 className="text-xl font-semibold mb-4 text-center">
                            Expert Team
                        </h3>
                        <p className="text-center mb-6">
                            Our Skilled Professionals Bring A Wealth Of Knowledge And Expertise
                            To Every Project, Ensuring Exceptional Results And Reliable Service.
                        </p>
                        <FaRegLightbulb className="text-4xl absolute bottom-4 right-4 transition group-hover:text-white" />
                    </div>

                    {/* Sustainability Focus */}
                    <div className="rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-300 relative overflow-hidden hover:bg-orange-700 hover:text-white transition">
                        <h3 className="text-xl font-semibold mb-4 text-center">
                            Sustainability Focus
                        </h3>
                        <p className=" text-center mb-6">
                            At The Core Of Our Operations Is A Commitment To Environmental
                            Stewardship. We Strive To Reduce Our Carbon Footprint And Promote
                            Sustainable Practices Throughout Our Business.
                        </p>
                        <IoIosCloudOutline className="text-4xl  absolute bottom-4 right-4 transition group-hover:text-white" />
                    </div>

                    {/* Customer-Centric Approach */}
                    <div className="rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-300 relative overflow-hidden hover:bg-orange-700 hover:text-white transition">
                        <h3 className="text-xl font-semibold mb-4 text-center">
                            Customer-Centric Approach
                        </h3>
                        <p className=" text-center mb-6">
                            We Prioritize Our Clients’ Needs And Work Diligently To Provide
                            Personalized Solutions And Outstanding Support Every Step Of The
                            Way.
                        </p>
                        <FaLink className="text-4xl  absolute bottom-4 right-4 transition group-hover:text-white" />
                    </div>
                </div>
            </div>



            {/* Project */}
            <div className="bg-white py-12">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Our <span className="text-orange-500">Projects</span>
                </h2>

                {/* Main Container for Flex Layout */}
                <div className="flex flex-row gap-4 p-4">

                    {/* First Column: Two Side-by-Side Images and Text */}
                    <div className="w-1/2 flex flex-col">
                        {/* Two Side-by-Side Images */}
                        <div className="flex flex-row gap-1 h-1/2">

                            {/* First Image (Mumbai) */}
                            <div className="relative w-1/2">
                                <img
                                    src={mumbaiImage}
                                    alt="Mumbai"
                                    className="left-img w-full lg:h-full  object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4 flex items-center p-2 rounded-lg">
                                    <span className="text-xl text-white"><IoLocationOutline /></span>
                                    <span className="text-sm font-semibold text-white ml-1">Mumbai</span>
                                    <span className="text-2xl text-white ml-1">→</span>
                                </div>
                            </div>

                            {/* Second Image (Aurangabad) */}
                            <div className="relative w-1/2">
                                <img
                                    src={aurangabadImage}
                                    alt="Aurangabad"
                                    className="w-full lg:h-full right-img object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4 flex items-center p-2 rounded-lg">
                                    <span className="text-xl text-white"><IoLocationOutline /></span>
                                    <span className="text-sm font-semibold text-white ml-1">Aurangabad</span>
                                    <span className="text-2xl text-white ml-1">→</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Below Images */}
                        <div className="mt-4">
                            <p className="text-gray-600 desktop-text text-sm">
                                We’ve successfully completed solar projects for homes, businesses, and remote areas, reducing energy costs and carbon emissions. Our key achievement is powering over 500 homes and businesses with clean, sustainable energy, driving the adoption of renewable solutions.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 desktop-button bg-orange-700 text-white text-lg font-semibold py-2 px-4 rounded-md"
                            >
                                Get Free Consultation
                            </a>
                        </div>
                        <div className="mobile-only">
                            <p className="text-gray-600 mobile-text">
                                We've successfully completed solar projects for homes and businesses
                            </p>

                        </div>
                    </div>

                    {/* Second Column: Single Tall Image */}
                    <div className="w-1/2">
                        <div className="relative h-full">
                            <img
                                src={puneImage}
                                alt="Pune"
                                className="w-full lg:h-full side-img object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4 flex items-center p-2 rounded-lg">
                                <span className="text-xl text-white"><IoLocationOutline /></span>
                                <span className="text-sm font-semibold text-white ml-1">Pune</span>
                                <span className="text-2xl text-white ml-1">→</span>
                            </div>
                        </div>
                    </div>

                </div>

                <a
                    href="#"
                    className="inline-block  mobile-button bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
                >
                    Get Free Consultation
                </a>
            </div>


            {/* Testimonial */}
            <div className="relative z-10 py-16 bg-white text-center">
                <h2 className="text-4xl font-bold text-gray-800">Words From <span className="text-orange-600">Our Clients</span></h2>
                <div className="mt-8 testimonial">
                    <div className="flex items-center justify-center space-x-4">
                        {/* Left Arrow */}
                        <button
                            className="p-2 text-gray-600 border border-gray-600 rounded-md hover:bg-orange-600 hover:text-white transition"
                            onClick={() => setTestimonialIndex(testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1)}
                        >
                            &lt;
                        </button>

                        {/* Testimonial Content */}
                        <div className="w-full max-w-xl text-center">
                            <img
                                src={testimonials[testimonialIndex].image}
                                alt={testimonials[testimonialIndex].name}
                                className="mx-auto w-24 h-24 rounded-full object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-orange-600">{testimonials[testimonialIndex].name}</h3>
                            <p className="mt-2 text-gray-600 italic">"{testimonials[testimonialIndex].text}"</p>
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="p-2 text-gray-600 border border-gray-600 rounded-md hover:bg-orange-600 hover:text-white transition"
                            onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Dots for Testimonial */}
                    <div className="mt-4 flex justify-center space-x-2">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full ${testimonialIndex === idx ? 'bg-orange-600' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

             
              {/* Different */}
            <div className="relative bg-[white] text-center py-10 text-white">
                {/* Top angled shape */}

                {/* Angled shape with rounded corner */}
                <div className='top-design'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '300px',
                        height: '100px',
                        backgroundColor: '#D05A2A',
                        borderBottomLeftRadius: '40px',
                        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        borderTopLeftRadius: '170px',

                    }}
                ></div>



                <div className="bg-[#772E26] p-8 lg:p-16 rounded-lg text-white max-w-8xl mx-auto text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">Our Process of Installation</h2>
                    <p className="text-md lg:text-base mb-8">
                        At SolarArk, We Pride Ourselves On Delivering A Seamless And Efficient Installation Process For Your Solar System.
                    </p>

                    {/* Desktop Carousel */}
                    <div className="hidden lg:flex justify-center items-center overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {/* Divide steps into groups of 4 for each slide */}
                            {Array.from({ length: Math.ceil(steps.length / 4) }, (_, i) => (
                                <div key={i} className="flex min-w-full gap-4 px-4">
                                    {steps.slice(i * 4, i * 4 + 4).map((step, index) => (
                                        <div key={index} className="w-1/4">
                                            <StepCard step={step.step} title={step.title} description={step.description} />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Stacked Layout */}
                    <div className="flex lg:hidden flex-col gap-8">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step.step} title={step.title} description={step.description} />
                        ))}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: Math.ceil(steps.length / 4) }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-orange-500" : "bg-[#FFD1B9]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                {/* Bottom angled shape */}
                <div className='bottom-design'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '300px',
                        height: '80px',
                        backgroundColor: '#D05A2A',
                        borderTopRightRadius: '40px',
                        clipPath: 'polygon(0% 0%, 70% 0%, 102% 102%, 0% 100%)',

                    }}
                ></div>
            </div>

              {/* Find Us */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-20 py-10 lg:py-20">
                {/* First Column */}
                <div className="lg:w-1/2 flex flex-col justify-start space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        Where can you{' '}
                        <span className="text-orange-600">find us</span>
                        ?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We Offer Solar Services Across Key Cities In Maharashtra, Providing Clean Energy Solutions To Homes And Business.
                        Our Presence Is Growing Daily As We Continue To Expand Sustainable Energy Access Across The Region.
                    </p>
                    <ul className="space-y-3 text-lg text-gray-700 list-disc pl-5">
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <li>Aurangabad</li>
                        <li>Nagpur</li>
                    </ul>
                </div>

                {/* Second Column - Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/solar_images/maharashtra_map.png`}
                        alt="City"
                        className="max-w-full h-auto object-cover lg:max-h-full"
                    />
                </div>
            </div>


             {/* Questioning */}
            <div className="flex flex-col md:flex-row items-start p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-8">
                {/* First Column - Images */}
                <div className="md:w-1/2 flex flex-col relative">
                    {/* Decorative Design on Top */}
                    <div className="w-32 h-7 bg-red-700 rounded-md self-start mb-4"></div>

                    {/* Images Side by Side with Fixed Height */}
                    <div className="flex space-x-4 h-[400px]"> {/* Adjust height as needed */}
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/solar_images/slide3.jpg`}
                            alt="Solar Panel 1"
                            className="rounded-lg w-1/2 h-full object-cover"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/solar_images/slide1.jpg`}
                            alt="Solar Panel 2"
                            className=" w-1/2 h-full object-cover second-img"
                        />
                    </div>

                    {/* Decorative Design on Bottom */}
                    <div className="w-32 h-7 bg-red-700 rounded-md self-end mt-4"></div>
                </div>

                {/* Second Column - FAQ Section */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-black">
                        Got Questions? We Have Answers!
                        <span className="text-orange-500 ml-2">Explore now</span>
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                            >
                                <div
                                    className="flex justify-between items-center text-gray-800 font-semibold"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="text-xl">
                                        {openQuestion === index ? "-" : "+"}
                                    </span>
                                </div>
                                {openQuestion === index && (
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
