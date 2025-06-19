import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="flex w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-orange-300 pl-4">Hi, my name is</p>
        
        <h1 className="text-5xl sm:text-5xl font-bold text-[#ccd6f6] pl-4">
          Matthew Downs <span className="text-orange-300">&</span>
        </h1>

        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0] pl-4">
          I’m a Cybersecurity Engineer.
        </h2>

        <p className="text-[#8892b0] font-semibold py-4 max-w-[700px] pl-4">
          I specialize in building and securing modern digital infrastructure. With a focus on threat detection, log analysis, and incident response, I help safeguard enterprise systems at scale. My work blends technical depth with real-world risk reduction—and this site is a showcase of that approach in action.
        </p>

        <div className="pl-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white rounded-md group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-300 hover:border-orange-300 duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300 py-2">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
