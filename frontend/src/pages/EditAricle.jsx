import React, { useState, useEffect } from 'react';
import { useGeneralContext } from '../hooks/useGeneralContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router';
// const parse = require('html-react-parser');

const EditAricle = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const author = 'Adzeni Rustianda';
  const { dispatch } = useGeneralContext();
  const params = useParams();

  console.log({ title, body, category });

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('/api/article/' + params.id);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setTitle(json.title);
        setBody(json.body);
        setCategory(json.category);
      }
    };

    fetchArticle();

    dispatch({ type: 'SET_NAVBAR_SEARCH', payload: false });
  }, [dispatch, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = { title, body, author, category };
    const response = await fetch('/api/article/' + params.id, {
      method: 'PATCH',
      body: JSON.stringify(article),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (response.ok) {
      console.log(json);
    }
  };

  return (
    <>
      <div className="container mx-auto px-8 md:px-0 py-20">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-bold text-base mb-3">Title</label>
            <input
              type="text"
              className="outline-none border-[1px] rounded-xl px-4 py-2 mb-5"
              placeholder="Enter title article here ..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label className="font-bold text-base mb-3">Category</label>
            <input
              type="text"
              className="outline-none border-[1px] rounded-xl px-4 py-2 mb-5"
              placeholder="Enter category here ..."
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label className="font-bold text-base mb-3">Thumbnail</label>
            <input
              type="file"
              class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-green-forest hover:file:bg-gray-100 cursor-pointer mb-5"
            />
          </div>
          <label className="font-bold text-base mb-3">Main Article</label>
          <ReactQuill theme="snow" value={body} onChange={setBody} className="h-80 mt-3" />
          <button className="px-5 py-2 font-bold bg-green-forest text-white  mt-14 rounded-xl">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditAricle;
