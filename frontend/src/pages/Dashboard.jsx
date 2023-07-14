import { useEffect, useState } from 'react';
import { useArticleContext } from '../hooks/useArticleContext';
import { useNavigate } from 'react-router';
import { Edit3 } from 'react-feather';
import { Trash2 } from 'react-feather';
import Notif from '../components/Notif';

const Dashboard = () => {
  const { articles, dispatch } = useArticleContext();
  const navigate = useNavigate();
  const [notif, setShowNotif] = useState(false);
  const [message, setMessage] = useState();

  const successMessage = '✅ Article succesfully deleted!';
  const errorMesage = '❌ Failed to delete article!';

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
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 5000);

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_ARTICLES', payload: json });
      setMessage(successMessage);
    } else {
      setMessage(errorMesage);
    }
  };

  const handleEdit = (article) => {
    dispatch({ type: 'EDIT_ARTICLE', payload: article });
    navigate(`/edit-article/${article}`);
  };

  return (
    <div className="container h-screen mx-auto px-8 md:px-0 py-20 text-green-darker">
      <p className=" font-bold text-2xl mb-10">Dashboard</p>
      <Notif className={`my-5 ${notif === true ? 'block' : 'hidden'} ${message === successMessage ? 'bg-teal-500' : 'bg-yellow-400'} `} message={message} />
      {articles.map((article) => {
        return (
          <div className="w-full mb-5 p-8 rounded-lg card-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <div className="flex gap-3">
                <div
                  className="flex gap-1 bg-sky-500 text-white p-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    handleEdit(article._id);
                  }}
                >
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
