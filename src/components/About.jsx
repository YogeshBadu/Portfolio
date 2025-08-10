import React from 'react'

function About() {
    return (
        <>
        <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
            <h1 className='text-3xl font-bold mb-5'>About</h1>
            <div className="text-sm">
                <h1 className='text-xl font-semibold mt-8 text-green-700'>Education </h1>
                <p>
                    Bachelor of Technology in Computer Science and Engineering (B.Tech CSE) <br />
                    Amritsar Group of Colleges <br />
                    2022 - Present  <br /> <br />

                    Senior Secondary School (+2) <br />
                    Radiant Secondary School <br />
                    2022 <br /> <br />

                    10th Grade <br />
                    Batika International Public School <br />
                    2020
                </p>
                <h1 className='text-xl font-semibold mt-8 text-green-700'>Skills & Expertise </h1>
                <p>
                    I am a web developer proficient in core web technologies including HTML5, CSS3, and JavaScript (ES6+). I'm currently working on React framework. As a highly effective communicator, I am adept at collaborating with team members, understanding project requirements, and clearly articulating my ideas to ensure seamless project development from start to finish.
                </p>
                <h1 className='text-xl font-semibold mt-8 text-green-700'>Projects  
                </h1>
                <h3 className=" font-semibold">Personal Portfolio Website</h3>
            <p className="text-gray-600 italic ">A personal portfolio website to showcase my skills and projects.</p>
            <p><strong>Technologies Used:</strong> React.js, Tailwind CSS, JavaScript.</p>

            </div>


        </div>
        </>
    )
}

export default About
