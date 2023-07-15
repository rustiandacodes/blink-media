import React from 'react';
import { Search } from 'react-feather';
import { Image } from 'react-feather';
import categories from '../services/Categories';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { useGeneralContext } from '../hooks/useGeneralContext';
import { useArticleContext } from '../hooks/useArticleContext';
const parse = require('html-react-parser');

const Home = () => {
  // const { dispatch } = useGeneralContext();
  const { articles, dispatch } = useArticleContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('api/article');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_ARTICLES', payload: json });
      }
    };
    fetchArticle();
    dispatch({ type: 'SET_NAVBAR_SEARCH', payload: false });
  }, [dispatch]);

  const handleArticle = (e) => {
    navigate('/article/' + e._id);
  };

  return (
    <>
      <div className=" bg-green-forest">
        <div className="py-32 container mx-auto px-10 text-center text-white">
          <h1 className="font-bold text-4xl">
            Welcome to <span>*Blink</span> Media!
          </h1>
          <p className="my-5">Unlocking Ideas, Inspiring Minds: Your Gateway to Limitless Knowledge 🧠</p>
          <div className="flex justify-center">
            <input type="text" placeholder="Search article here ..." className="px-3 w-full md:w-1/3 text-gray-500 rounded-l-md outline-none " />
            <div className="w-10 h-10 flex items-center justify-center bg-green-darker rounded-r-md">
              <Search size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap gap-2 justify-center py-10 md:py-20 container p-10">
        {categories.map((category) => {
          return (
            <div className="cursor-pointer w-fit text-green-forest border-2 border-green-forest py-1 px-3 rounded-md text-sm md:text-base">
              <p>{category}</p>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto p-5">
        <div className="flex items-center gap-3 mb-10">
          <Image size={32} />
          <h2 className="text-xl md:text-3xl font-bold text-green-darker">Latest Post</h2>
        </div>
        <div className="flex flex-wrap justify-center lg:gap-2 text-green-darker">
          {articles.map((article) => {
            return (
              <div className="lg:w-[24%] p-2 sm:w-1/3 w-1/2 mb-8">
                <img src={`https://source.unsplash.com/random/500x500/?${article.category}`} className="rounded-3xl mb-3" alt="thumbnail" />
                <div className="flex items-center gap-3 text-xs lg:text-base mb-3">
                  <div className="w-8 rounded-full overflow-hidden">
                    <img src={`https://source.unsplash.com/random/500x500/?profile`} alt="profile" />
                  </div>
                  <p className="font-bold text-xs sm:text-base hover:text-blue-700 cursor-pointer">{article.author}</p>
                  <p className="text-xs hidden lg:block sm:text-base"> 10 days ago</p>
                </div>
                <h3
                  className="font-bold text-base lg:text-xl mb-3 underline hover:text-blue-700 cursor-pointer truncate"
                  onClick={() => {
                    handleArticle(article);
                  }}
                >
                  {article.title}
                </h3>
                <p className="mb-3 text-xs lg:text-base">{parse(article.body)}</p>
                <span className="text-xs font-bold cursor-pointer text-green-forest border-2 border-green-forest py-1 px-3 rounded-md">{article.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
