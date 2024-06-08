import React from 'react'
import htmlLogo from '../assets/logos/html.png'
import cssLogo from '../assets/logos/css.png'
import javascriptLogo from '../assets/logos/javascript.png'
import reactLogo from '../assets/logos/react.png'
import tailwindLogo from '../assets/logos/tailwind.png'
import mongodbLogo from '../assets/logos/mongodb.png'
import githubLogo from '../assets/logos/github.png'
import pythonLogo from '../assets/logos/python.png'

const Skills = () => {
    const skills=[
        {
            id:1,
            src:htmlLogo,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:cssLogo,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:javascriptLogo,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:reactLogo,
            title:"React",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:pythonLogo,
            title:"Python",
            style:"shadow-yellow-400"
        },
        {
            id:6,
            src:tailwindLogo,
            title:"Tailwind",
            style:"shadow-sky-400"
        },
        {
            id:7,
            src:mongodbLogo,
            title:"MongoDb",
            style:"shadow-green-500"
        },
        {
            id:8,
            src:githubLogo,
            title:"Github",
            style:"shadow-gray-400"
        },
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Skills</p>
                <p className='py-6'>There are the technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-8 text-center py-8 px-12 sm:px-0'>
                {skills.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='logoImg' className='w-20 mx-auto h-[4.5rem]'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills