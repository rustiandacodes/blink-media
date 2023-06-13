import React from 'react';
import googleLogo from '../assets/google icon.svg';
import thumbnail from '../assets/login thumb.png';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:h-screen flex justify-center items-center lg:p-0 p-5">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-end items-center gap-8 h-[80%] overflow-hidden shadow-md text-green-darker rounded-3xl border-2">
          <div className="lg:w-[40%] sm:w-[80%] p-10 ">
            <h1 className="md:text-3xl text-xl text-center font-bold">Login into your account</h1>
            <p className="md:text-base text-sm text-center my-6">Welcome back! select method to login :</p>
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
                  Email <span className="text-red-600">*</span>
                </label>
                <input type="email" className="border-2 h-12 rounded-2xl md:text-sm text-xs px-3" placeholder="Enter email here ..." />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="md:text-sm text-xs font-bold mb-2 text-green-darker">
                  Password <span className="text-red-600">*</span>
                </label>
                <input type="password" className="border-2 h-12 rounded-2xl md:text-sm text-xs px-3" placeholder="***********" />
              </div>
              <button className="w-full h-12 text-center bg-green-forest text-white font-bold rounded-2xl md:text-base text-sm">Login</button>
            </form>
            <p className="my-5 md:text-base text-sm">
              Don’t have an account?{' '}
              <span className="font-bold underline cursor-pointer" onClick={() => navigate('/signup')}>
                Create an account
              </span>
            </p>
          </div>
          <div className="lg:w-[60%] w-full rounded-none lg:rounded-2xl bg-teal-200 overflow-hidden">
            <img src={thumbnail} className="rounder-2xl w-full overflow-hidden" alt="login-thumb" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
