import React from 'react'

const About = () => {
  return (
    
    <div name='about' className='px-10 dw-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-300 '>About</p>
          </div>
          <div>
          </div>
          </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 sm:divide-x-0 gap-8 pl-10'>
            <div className='sm:text-right text-4xl font-semibold '>
          <p>Hi I'm <span className='text-orange-400 opacity-60'>Matthew!</span> Nice to meet you! Please take a look around!</p>
            </div>
            
            <div>
              <p className='font-light tracking-tight'>Currently in school for my associates degree in information security, 
                I have found a passion in web development and in building responsive
                and modern web applications. With a keen focus on beautiful design, smart security
                standards, and a willingness to learn and try new things, I make a great addition to any team!
              </p>
            </div>
        </div>
      </div>
    </div>

          
        



  )
}

export default About