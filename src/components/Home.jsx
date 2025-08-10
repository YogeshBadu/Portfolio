import React from 'react';
import pic from '../../public/yb.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped, Typed } from "react-typed";

function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className="flex flex-col md:flex-row ">
                    <div className='md:w-1/2 mt-12 md:mt-24 order-2 md:order-1'>
                        <div className="space-y-2">
                            <div>
                                <span className='text-xl'>Welcome!
                                </span></div>

                            <div className='flex gap-1.5 text-2xl '>
                                <h1>Hello, I'm a</h1>
                                <ReactTyped
                                   className='text-red-700 font-bold'
                                    strings={["Developer", "Programmer"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>I'm a passionate front-end web developer dedicated to creating exceptional digital experiences. I specialize in building responsive, modern, and user-friendly websites with a strong focus on clean code and intuitive design. My goal is to transform creative ideas into visually appealing and highly functional web applications that provide a seamless experience for every user.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <li><FaFacebook className='text-2xl cursor-pointer hover:scale-110 duration-200' /></li>
                                    <li> <FaYoutube className='text-2xl cursor-pointer hover:scale-110 duration-200' /></li>
                                    <li> <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200' /></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <ul className='flex space-x-5'>
                                    <li> <SiMongodb className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px] border-gray-200' /></li>
                                    <li> <SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px] border-gray-200'  /> </li>
                                    <li> <FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px] border-gray-200' /></li>
                                    <li> <IoLogoNodejs className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[1px] border-gray-200' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2  mt-8 md:ml-48 md:mt-20 order-1'>
                    <img src={pic}  className='h-[350px] w-[350px] rounded-full object-cover md:h-[450px] md:w-[450px]' alt="" />
                    </div>
                </div>
                 
            </div>
            <hr className='my-8 border-gray-300 '/>
            
        </>
    )
}

export default Home
