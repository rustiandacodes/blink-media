import React from 'react';
import { Search } from 'react-feather';
import { Edit } from 'react-feather';
import { ChevronDown } from 'react-feather';
import { Menu } from 'react-feather';
import profilePicture from '../assets/profile-picture.png';

const Navbar = () => {
  return (
    <>
      <header className="py-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-10 md:px-0">
          <p className="text-xl md:text-3xl font-bold text-green-forest cursor-pointer">
            *Blink <span className="text-green-darker">Media</span>
          </p>
          <div className="w-1/3 items-center rounded-full border-2 px-5 md:flex hidden">
            <input type="text" className="w-full h-10 outline-none text-gray-400" placeholder="Search article here .." />
            <Search color="gray" size={20} className="cursor-pointer" />
          </div>
          <div className="hidden gap-3 font-bold">
            <button className="px-5 py-2 rounded-xl bg-green-forest text-white ">Login</button>
            <button className="px-5 py-2 rounded-xl border-[3px] border-green-forest text-green-forest ">Sign Up</button>
          </div>
          <div id="after-login" className="md:flex hidden items-center gap-5">
            <div id="create-article" className="flex gap-2 items-center cursor-pointer">
              <Edit color="#395B64" size={30} className="cursor-pointer" />
              <p className="text-base text-green-darker font-semibold">Write Article</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={profilePicture} alt="profile-piccture" className="w-10 rounded-full border-2 border-gray shadow-sm cursor-pointer" />
              <ChevronDown color="gray" size={24} className="cursor-pointer" />
            </div>
          </div>
          <Menu size={24} color="gray" className="cursor-pointer md:hidden" />
        </div>
      </header>
    </>
  );
};

export default Navbar;