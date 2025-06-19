import React from 'react';

const About = () => {
  return (
    <div name="about" className="px-10 w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-300">About</p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-right text-4xl font-semibold">
            <p>
              Hi, I’m <span className="text-orange-300">Matthew</span>. I’m a Cybersecurity Engineer focused on Threat Detection, Log Management, and keeping major networks secure.
            </p>
          </div>

          <div className="text-base font-light tracking-tight">
            <p>
              I specialize in working with large-scale SIEM platforms, tuning detection rules, and investigating security incidents. I believe in combining automation with deep analysis to stay ahead of evolving threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
