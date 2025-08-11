import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed z-50 top-0 left-0 right-0 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <h1 className='font-semibold text-xl cursor-pointer'>Yoges
                            <span className='text-green-500 text-2xl'>h</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-110  duration-200 cursor-pointer ' key={id}>
                                        <Link
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            activeClass='active'
                                        >{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='md:hidden' onClick={() => setMenu(!menu)}> {menu ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>
                </div>
                {/* mobile navbar */}
                {
                    menu && (
                        <div className='bg-white'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-110 duration-200 cursor-pointer font-semibold' key={id}>
                                            <Link
                                                onClick={() => setMenu(!menu)}
                                                to={text}
                                                smooth={true}
                                                duration={500}
                                                activeClass='active'
                                            >{text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar
