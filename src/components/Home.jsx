import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export const Home = () => {
  
  return (
    <div name='home' className='flex flex-auto-full h-screen bg-[#0a192f]'>

      {/*Container*/}
      <div className='max-w-{1000px} mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-orange-300 pl-4'>Hi, my name is</p>
        <h1 className='text-5xl sm:text 5xl font-bold text-[#ccd6f6] pl-4'>
          Matthew Downs <span className='text-orange-400 opacity-70'>&amp;</span></h1>
        <h2 className='text-5xl sm: text-4xl font-bold text-[#8892b0] pl-4'>
          I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] font-semibold py-4 max-w-[700px] pl-4'>
         I specialize in building, securing, and occasionally designing exceptional
          digital experiences. Currently, I'm focused on building sleek and responsive
           full-stack web applications - just like this one.
        </p>
        <div className='pl-4'> <Link to="work" smooth={true}  duration={500} >
          <button 
           href className= ' text-white rounded-md group border-2 px-6 py-3  my-2 flex items-center hover:bg-orange-300 hover:border-orange-300 hover:duration-300'> 
            View Work 
          <span className='group-hover:rotate-90 duration-300 py-2'> 
          
            <HiArrowNarrowRight className='ml-2'/>
            </span>
            </button>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
          
          