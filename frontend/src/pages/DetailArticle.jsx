import { Share2 } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { ThumbsUp } from 'react-feather';
import { useArticleContext } from '../hooks/useArticleContext';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const DetailArticle = () => {
  // const { dispatch } = useGeneralContext();
  const { articles, dispatch } = useArticleContext();
  const params = useParams();

  useEffect(() => {
    // dispatch({ type: 'SET_NAVBAR_SEARCH', payload: true });
    const findArticle = async () => {
      const response = await fetch('/api/article/' + params.id, {
        method: 'GET',
      });
      const json = await response.json();
      dispatch({ type: 'SET_ARTICLES', payload: json });
    };
    findArticle();
  }, [dispatch, params.id]);
  return (
    <>
      <div className="container px-10 lg:px-0 mx-auto max-w-6xl md:py-20 py-12 text-green-darker">
        <h1 className="font-bold md:text-4xl text-3xl">{articles.title}</h1>
        <div className="my-10">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="flex justify-between my-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img src={`https://source.unsplash.com/random/500x500/?men`} alt="profile" className="w-8 rounded-full border-2 border-gray shadow-sm cursor-pointer" />
                <p className="text-base font-semibold">{articles.author}</p>
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
          <img src={`https://source.unsplash.com/random/1900x800/?${articles.category}`} className="lg:rounded-3xl rounded-xl" alt="thumbnail" />
        </div>
        <div className="mt-8">
          <p className="text-sm md:text-base">{articles.body}</p>
        </div>
      </div>
    </>
  );
};

export default DetailArticle;
