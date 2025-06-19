import React from 'react';

import AWS from '../assets/aws.png';
import Azure from '../assets/azure.png'; // Add logo manually to /assets
import Splunk from '../assets/splunk.png'; // Add manually
import XSOAR from '../assets/xsoar.png'; // Add manually
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Kali from '../assets/kali.png'; // Add manually
import ETL from '../assets/etl.png'; // Add manually

const Skills = () => {
  return (
    <div name="skills" className="px-10 bg-[#0A192F] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div>
          <p className="text-4xl font-semibold inline border-b-4 border-orange-300">
            Experience
          </p>
          <p className="py-4 font-semibold text-md">// Technologies & platforms I’ve worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center py-8 gap-4">
          {/* AWS */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={AWS} alt="AWS Icon" />
            <p>AWS</p>
          </div>

          {/* Azure Sentinel */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Azure} alt="Azure Sentinel Icon" />
            <p>Azure Sentinel</p>
          </div>

          {/* Splunk */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Splunk} alt="Splunk Icon" />
            <p>Splunk</p>
          </div>

          {/* Cortex XSOAR */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={XSOAR} alt="Cortex XSOAR Icon" />
            <p>Cortex XSOAR</p>
          </div>

          {/* React */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React</p>
          </div>

          {/* Tailwind */}
          <div className="shadow-[#040c16] hover:scale-110 duration-500 p-4">
