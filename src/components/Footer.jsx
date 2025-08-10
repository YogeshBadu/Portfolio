import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <hr className='my-8 border-gray-300 '/>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <footer>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaFacebook   size={24}/>
                    <FaInstagram  size={24}/>
                    <FaTwitter    size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <div className='mt-5 border-t border-gray-700 pt-5 flex flex-col items-center'>
                    <p>
                        &copy; YB. All rights reserved.
                    </p>
                    <p>Thanks for visiting!!</p>

                </div>
            </div>
        </footer>      
    </div>
    </>
  )
}

export default Footer
