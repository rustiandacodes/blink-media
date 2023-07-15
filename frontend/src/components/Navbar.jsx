import { useState } from 'react';
import { Search } from 'react-feather';
import { Edit } from 'react-feather';
import { ChevronDown } from 'react-feather';
import { useNavigate } from 'react-router';
// import { useGeneralContext } from '../hooks/useGeneralContext';
import { useArticleContext } from '../hooks/useArticleContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { dispatch } = useArticleContext();
  const searchIcon = true;

  const handleHome = () => {
    const fetchArticle = async () => {
      const response = await fetch('api/article');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_ARTICLES', payload: json });
        console.log(json);
      }
    };
    fetchArticle();
  };
  return (
    <>
      <header className="py-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-10 md:px-0">
          <p
            className="text-xl md:2xl font-bold text-green-forest cursor-pointer"
            onClick={() => {
              handleHome();
              navigate('/');
            }}
          >
            *Blink <span className="text-green-darker">Media</span>
          </p>
          <div className={`w-1/3 items-center rounded-full border-2 px-5 hidden ${searchIcon === false ? 'md:hidden' : 'md:flex'}`}>
            <input type="text" className="w-full h-8 outline-none text-gray-400" placeholder="Search article here .." />
            <Search color="gray" size={20} className="cursor-pointer" />
          </div>
          <div className="hidden gap-3 font-bold">
            <button className="px-5 py-2 rounded-xl bg-green-forest text-white ">Login</button>
            <button className="px-5 py-2 rounded-xl border-[3px] border-green-forest text-green-forest ">Sign Up</button>
          </div>
          <div id="after-login" className="flex items-center gap-5">
            <Search color="#395B64" size={24} className="cursor-pointer md:hidden" />
            <div id="create-article" className="flex gap-2 items-center cursor-pointer" onClick={() => navigate('/create-article')}>
              <Edit color="#395B64" size={24} className="cursor-pointer" />
              <p className="text-base md:block hidden text-green-darker font-semibold">Write Article</p>
            </div>
            <div
              className="relative flex gap-2 items-center"
              onClick={() => {
                !show ? setShow(true) : setShow(false);
              }}
            >
              <img src={`https://source.unsplash.com/random/500x500/?profile`} alt="profile-piccture" className="w-8 rounded-full border-2 border-gray shadow-sm cursor-pointer" />
              <ChevronDown color="gray" size={20} className="cursor-pointer" />
              <div className={`${show ? 'absolute' : 'hidden'} z-10 font-medium text-center text-sm text-green-darker rounded-lg shadow-md top-12  p-5 py-5 mx-auto bg-white -left-12`}>
                <div className="flex gap-2 mb-3 cursor-pointer">
                  <p>👨‍🦰</p>
                  <p onClick={() => navigate('/profile')}>Profile</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <p>🖼️</p>
                  <p onClick={() => navigate('/dashboard')}>Dashboard</p>
                </div>
              </div>
            </div>
          </div>
          {/* <Menu size={24} color="gray" className="cursor-pointer md:hidden" /> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
