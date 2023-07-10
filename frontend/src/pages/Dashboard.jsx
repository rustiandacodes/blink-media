import { useEffect } from 'react';
import { useArticleContext } from '../hooks/useArticleContext';
import { Edit3 } from 'react-feather';
import { Trash2 } from 'react-feather';

const Dashboard = () => {
  const { articles, dispatch } = useArticleContext();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('api/article');

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_ARTICLES', payload: json });
      }
    };
    fetchArticle();
  }, [dispatch]);

  const handleDelete = async (article_id) => {
    const response = await fetch('/api/article/' + article_id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_ARTICLES', payload: json });
      console.log(json);
    }
  };

  console.log(articles);
  return (
    <div className="container h-screen mx-auto px-8 md:px-0 py-20 text-green-darker">
      <p className=" font-bold text-2xl pb-10">Dashboard</p>
      {articles.map((article) => {
        return (
          <div className="w-full mb-5 p-8 rounded-lg card-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <div className="flex gap-3">
                <div className="flex gap-1 bg-sky-500 text-white p-2 rounded-lg cursor-pointer">
                  <Edit3 size={20} />
                  <span>Edit</span>
                </div>
                <div
                  className="flex gap-1 bg-red-500 text-white p-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    handleDelete(article._id);
                  }}
                >
                  <Trash2 size={20} />
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
