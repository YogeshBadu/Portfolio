import React from 'react'
import express from '../../public/express.png'
import mongodb from '../../public/mongodb.jpg'
import react from '../../public/reactjs.webp'
import node from '../../public/node.png'

function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:mongodb,
            namee:"MongoDB"
        },
        {
            id:2,
            logo:express,
            namee:"Express Js"
        },
        {
            id:3,
            logo:react,
            namee:"React Js"
        },
        {
            id:4,
            logo:node,
            namee:"Node Js"
        }
    ]
  return (
    <>
    <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5'>
           { cardItem.map(({id,logo,namee}) => (
                <div className='md:w-[300px] md:h-[300px] border-[2px] border-gray-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200 ' key={id}>
                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] border-gray-200' alt="" />
                    <div>
                        <div className='px-2 font-bold text-xl mb-2'>{namee}</div>
                        <p className='px-2 text-gray-700'>Coming Soon!!</p>
                    </div>
                    <div className='px-2 py-4'>
                        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                    </div>
                </div>

            ))}
        </div>
    </div>
    </div>
    </>
  )
}

export default Portfolio
