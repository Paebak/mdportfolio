import React from 'react'
import alinaImg from '../assets/projects/alinaImg.JPG'

const Work = () => {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-300'>Work</p>
          <p className='py-6 font-semibold text-md'>//Check out some of my recent work</p>
        </div>

        {/*Card Container*/} 
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg'> 
          
          <div style={{backgroundImage: `url(${alinaImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Alina Picture
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 hover:bg-gray-500 duration-100 text-gray-700 fond-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className= 'text-center rounded-lg px-4 py-3 m-2 bg-gray-200 hover:bg-gray-500 duration-100 text-gray-700 fond-bold text-lg'>Code</button>
                  </a>
                </div>
              
            </div>
          </div>
          
          <div style={{backgroundImage: `url(${alinaImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                 Alina Picture
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 hover:bg-gray-500 duration-100 text-gray-700 fond-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className= 'text-center rounded-lg px-4 py-3 m-2 bg-gray-200 hover:bg-gray-500 duration-100 text-gray-700 fond-bold text-lg'>Code</button>
                  </a>
                </div>
              
            </div>
          </div>
          <div style={{backgroundImage: `url(${alinaImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Alina Picture
                </span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 hover:bg-gray-500 duration-100 fond-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className= 'text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 hover:bg-gray-500 duration-100 fond-bold text-lg'>Code</button>
                  </a>
                </div>
              
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Work

