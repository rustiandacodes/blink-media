import React from 'react';
import googleLogo from '../assets/google icon.svg';
import loginThumbnail from '../assets/signup thumb.png';
import { useNavigate } from 'react-router';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:h-screen flex justify-center items-center lg:p-0 p-5 absolute top-0 right-0 left-0 bg-white">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-end items-center gap-8 h-[80%] overflow-hidden shadow-md text-green-darker rounded-3xl border-2">
          <div className="lg:w-[40%] sm:w-[80%] p-10 ">
            <h1 className="md:text-3xl text-xl text-center font-bold">Create your account</h1>
            <p className="md:text-base text-sm text-center my-6">Let’s get started to share your thought’s to the world 🧠</p>
            <div className="border-2 cursor-pointer h-12 rounded-2xl flex justify-center items-center">
              <img className="w-10" src={googleLogo} alt="google logo" />
              <p className="font-semibold text-sm md:text-base">login with google</p>
            </div>
            <div className="flex justify-center my-6 items-center gap-3">
              <hr className="bg-gray-300 w-[40%] h-[2px]" />
              <p className="md:text-base text-sm">or</p>
              <hr className="bg-gray-300 w-[40%] h-[2px]" />
            </div>
            <form action="">
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="md:text-sm text-xs font-bold mb-2 text-green-darker">
                  Name <span className="text-red-600">*</span>
                </label>
                <input type="text" className="border-2 h-12 rounded-2xl md:text-sm text-xs px-3 focus:border-green-forest focus:ring-1 focus:ring-green-forest focus:outline-none" placeholder="Enter name here ..." />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="md:text-sm text-xs font-bold mb-2 text-green-darker">
                  Email <span className="text-red-600">*</span>
                </label>
                <input type="email" className="border-2 h-12 rounded-2xl md:text-sm text-xs px-3 focus:border-green-forest focus:ring-1 focus:ring-green-forest focus:outline-none" placeholder="Enter Email here ..." />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="md:text-sm text-xs font-bold mb-2 text-green-darker">
                  Password <span className="text-red-600">*</span>
                </label>
                <input type="password" className="border-2 h-12 rounded-2xl md:text-sm text-xs px-3 focus:border-green-forest focus:ring-1 focus:ring-green-forest focus:outline-none" placeholder="***********" />
              </div>
              <button className="w-full h-12 text-center bg-green-forest text-white font-bold rounded-2xl md:text-base text-sm">Signup</button>
            </form>
            <p className="my-5 md:text-base text-sm">
              Don’t have an account?{' '}
              <span className="font-bold underline cursor-pointer" onClick={() => navigate('/login')}>
                Login
              </span>
            </p>
          </div>
          <div className="lg:w-[60%] w-full rounded-none lg:rounded-2xl bg-teal-200 overflow-hidden">
            <img src={loginThumbnail} className="rounder-2xl w-full overflow-hidden" alt="login-thumb" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
