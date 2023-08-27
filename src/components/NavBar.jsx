import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaGit} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Untitled from '../assets/Untitled.png'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const MainMenuLink = (props) => (
  <li className='hover:text-red-300 duration-300'>
    <input type="button" onClick="document.getElementById('middle').scrollIntoView();"/>
    <Link to={props.link.toLowerCase()} smooth={true} duration={500}>
      {props.link}
    </Link>
  </li>
  );

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const links = ['Home','About','Skills','Work','Contact'];


  return (
    <div className='fixed w-full h-[80px] flex justify-betwe en items-center px-4 bg-[#0A192F] text-gray-300'>
     <div>
        <img src={Untitled} alt="Logo" style={{width: '75px'}} />
     </div>

     {/* Menu Menu */}
     
      <ul className='hidden md:flex'>
        {
          links.map(l => (
            <MainMenuLink link={l}/>
          ))
        }
      </ul>


     {/* Hamburger */}
     <div onClick={handleClick} className='md:hidden z-10 hover:text-orange-300 duration-300'>
      {!nav ? <FaBars /> : <FaTimes />}
     </div>

     {/* Mobile Menu */}
     <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col  justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-orange-300 tracking-tight' href='#'>
          <Link onClick={handleClick} to="home" smooth={true}  duration={500} >
          Home
        </Link ></li>
        <li className='py-6 text-4xl hover:text-orange-300 tracking-tight' href='#'>
          <Link onClick={handleClick} to="about" smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='py-6 text-4xl hover:text-orange-300 tracking-tight' href='#'>
          <Link onClick={handleClick} to="work" smooth={true}  duration={500} >
          Work
        </Link></li>
        <li className='py-6 text-4xl hover:text-orange-300 tracking-tight' href='#'>
          <Link onClick={handleClick} to="skills" smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl hover:text-orange-300 tracking-tight' href='#'>
          <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li>
     </ul>

     {/* Social Icons */}
     <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex rounded-md justify-between items-center w-full text-gray-200 bg-blue-600 pl-4 pr-2'
          href="https://www.linkedin.com/in/matthew-downs2/" target='_blank'>
            Linkedin <FaLinkedin size={(30)} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex rounded-md justify-between items-center w-full text-gray-200 bg-gray-900 pl-4 pr-2'
          href="https://github.com/Paebak" target='_blank'>
            Github <FaGithub size={(30)} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex rounded-md justify-between items-center w-full text-gray-200 bg-green-500 pl-4 pr-2'
          href="mailto:matthewdowns225@gmail.com" target='_blank'>
            Email <HiOutlineMail size={(30)} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex rounded-md justify-between items-center w-full text-gray-200 bg-red-500 pl-4 pr-2'
          href="/" target='_blank'>
            Resume <BsFillPersonLinesFill size={(30)} />
          </a>
        </li>
      </ul>
     </div>

      </div>

  );
};

export default NavBar