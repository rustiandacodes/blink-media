import React from 'react';
import webIcon from '../assets/Firefox.svg';
import githubIcon from '../assets/GitHub.svg';
import instaIcon from '../assets/Instagram.svg';
import linkedIcon from '../assets/Linkedin.svg';

const Footer = () => {
  return (
    <div className=" py-10 mx-auto bg-green-forest md:p-20 p-10">
      <p className="text-xl md:text-2xl font-bold text-green-darker cursor-pointer">
        *Blink <span className="text-white">Media</span>
      </p>
      <p className="my-5 text-white lg:w-1/4 w-full">Unlocking Ideas, Inspiring Minds: Your Gateway to Limitless Knowledge 🧠</p>
      <hr className="my-8" />
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center text-white mt-5">
        <p>&copy; 2023 rustiandacodes. All Right Reserved</p>
        <div className="flex items-center gap-2">
          <div className="w-8">
            <img src={webIcon} className="w-full" alt="website icon" />
          </div>
          <div className="w-8">
            <img src={githubIcon} className="w-full" alt="github icon" />
          </div>
          <div className="w-8">
            <img src={linkedIcon} className="w-full" alt="linked icon" />
          </div>
          <div className="w-8">
            <img src={instaIcon} className="w-full" alt="Insta icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
