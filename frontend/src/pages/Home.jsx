import React from 'react';
import { Search } from 'react-feather';
import { Image } from 'react-feather';
import blogs from '../services/Article';
import categories from '../services/Categories';
import profilePicture from '../assets/profile-picture.png';

const Home = () => {
  return (
    <>
      <div className=" bg-green-forest">
        <div className="py-24 container mx-auto px-10 text-center text-white">
          <h1 className="font-bold text-3xl">
            Welcome to <span>*Blink</span> Media!
          </h1>
          <p className="my-5">Unlocking Ideas, Inspiring Minds: Your Gateway to Limitless Knowledge 🧠</p>
          <div className="flex justify-center">
            <input type="text" placeholder="Search article here ..." className="px-3 text-gray-500 rounded-l-md outline-none " />
            <div className="w-10 h-10 flex items-center justify-center bg-green-darker rounded-r-md">
              <Search size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center text-center py-20 container p-10">
        {categories.map((category) => {
          return <p className="mx-2 cursor-pointer text-green-forest border-2 border-green-forest py-1 px-3 rounded-md">{category}</p>;
        })}
      </div>
      <div className="container mx-auto p-5">
        <div className="flex items-center gap-3 mb-10">
          <Image size={32} />
          <h2 className="text-3xl font-bold text-green-darker">Latest Post</h2>
        </div>
        <div className="flex flex-wrap text-green-darker">
          {blogs.map((blog) => {
            return (
              <div className="md:w-1/4 md:p-5 sm:w-1/3 w-1/2 p-2">
                <img src={`https://source.unsplash.com/random/500x500/?${blog.category}`} className="rounded-3xl mb-3" alt="thumbnail" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 rounded-full overflow-hidden">
                    <img src={profilePicture} alt="profile" />
                  </div>
                  <p className="font-bold text-base">{blog.author}</p>
                  <p> 10 days ago</p>
                </div>
                <h3 className="font-bold text-xl mb-3 truncate">{blog.title}</h3>
                <p className="mb-3">{blog.content}</p>
                <span className="text-xs font-bold cursor-pointer text-green-forest border-2 border-green-forest py-1 px-3 rounded-md">{blog.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
