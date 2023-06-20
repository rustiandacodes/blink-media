import React from 'react';
import { Share2 } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { ThumbsUp } from 'react-feather';

const DetailArticle = () => {
  return (
    <>
      <div className="container px-10 lg:px-0 mx-auto max-w-6xl md:py-20 py-12 text-green-darker">
        <h1 className="font-bold md:text-4xl text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero fuga incidunt esse quos dolore aliquam!</h1>
        <div className="my-10">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="flex justify-between my-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img src={`https://source.unsplash.com/random/500x500/?men`} alt="profile" className="w-8 rounded-full border-2 border-gray shadow-sm cursor-pointer" />
                <p className="text-base font-semibold">rustiandazen</p>
                <p className="text-gray-500 hidden sm:block"> 10 weeks ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ThumbsUp />
              <MessageCircle />
              <Share2 />
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div className="">
          <img src={'https://source.unsplash.com/random/1900x800/?coding'} className="rounded-3xl" alt="thumbnail" />
        </div>
        <div className="mt-8">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam unde maxime accusantium rem iure quae laboriosam sapiente! Adipisci, sapiente odit. Suscipit, consequuntur! Pariatur sapiente tempora nam animi corrupti?
            Tempora eligendi iusto, sit accusamus beatae illum tempore molestiae ducimus debitis aliquid praesentium ipsum. Reiciendis tenetur ipsam consequatur obcaecati. Aliquid quod beatae distinctio inventore porro quae ut aut, nobis
            animi dolore qui modi voluptates voluptatum velit. Debitis quis, at pariatur hic ab, laboriosam nemo fugiat velit itaque quibusdam architecto vitae neque. Possimus assumenda velit, explicabo minima aut illum? Perferendis
            recusandae quo iure possimus, velit nulla. Et fuga minus iure eos magni!
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailArticle;
