import React from 'react'
import html from'../../public/html.png'
import css from '../../public/css.jpg'
import js from '../../public/javascript.png'
import python from '../../public/python.png'
import java from '../../public/java.png'

function Experience() {
    const cardItems=[
        {
            id:1,
            logo:html,
            namee:"HTML"

        },
        {
            id:2,
            logo:css,
            namee:"CSS"

        },
        {
            id:3,
            logo:js,
            namee:"JavaScript"

        },
        {
            id:4,
            logo:python,
            namee:"Python"

        },
        {
            id:5,
            logo:java,
            namee:"Java"

        },
    ]
  return (
    <>
    <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'> 
    
      <div>
        <h1 className='text-3xl font-bold mb-5'>
            Experience
        </h1>
        <p className='mt-8 font-semibold'>As a fresher, I have some experience in these technologies.</p>
        <div className='grid grid-cols-1 md:grid-cols-6 my-5'>
            {
                cardItems.map(({id,logo,namee})=>(
                    <div className='flex flex-col items-center justify-center md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-110 duration-200 '  key={id}>
                        <div className='text-center'>
                             <img src={logo} className='w-[150px] h-[150px] p-1 rounded-full border-[2px] border-gray-200' alt={namee} />
                             <h1 className='my-1'>{namee}</h1>

                        </div>
                       
                    </div>
                ))
            }

        </div>

      </div>
    </div>
    </>
  )
}

export default Experience
