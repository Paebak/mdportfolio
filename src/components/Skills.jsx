import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name='skills' className='px-10 bg-[#0A192F] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
        <div>
         
          <p className='text-4xl font-semibold inline border-b-4 border-orange-300 '>
            Experience
            </p>
          <p className='py-4 font-bold text-md'>
            // These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8'>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
            <p>HTML</p>
          
          </div>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
            <p>CSS</p>
          
          </div>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={Javascript} alt="HTML Icon" />
            <p>JavaScript</p>
          
          </div>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={GitHub} alt="HTML Icon" />
            <p>GitHub</p>
          
          </div>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
            <p>TailwindCSS</p>
          
          </div>
          <div className=' shadow-[#040c16] hover:scale-110 duration-500 p-2'>
            <img className='w-20 mx-auto' src={AWS} alt="HTML Icon" />
            <p className >AWS</p>
          
          </div>
         
        
        </div>
      </div>
    </div>
        
    
  
  );
};

export default Skills