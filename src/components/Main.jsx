import React from 'react';
import Image from '../assets/image.JPG';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={Image}
        alt="Main visual"
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-[-1]"
      />

      {/* Overlay and Content */}
      <div className="w-full h-full bg-white/60 flex items-center justify-center">
        <div className="max-w-[700px] w-full px-4 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            I'm Ujiro Eruteya
          </h1>
          <h2 className="flex justify-center lg:justify-start text-2xl sm:text-3xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                'Petroleum Engineer',
                2000,
                'Frontend Developer',
                2000,
                'Coder',
                2000,
                'Tech Enthusiast',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '8px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center lg:justify-start pt-6 gap-4">
            <a href="https://x.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://facebook.com/ujiro.eruteya" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer" size={20} />
            </a>
            <a href="https://instagram.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://linkedin.com/in/ujiro-eruteya" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/ujiroexotic" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

