import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const parse = require('html-react-parser');

const CreateArticle = () => {
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState('');
  console.log(value, parse(submit));

  return (
    <>
      <div className="container mx-auto px-8 md:px-0 py-20">
        <div className="flex flex-col">
          <label className="font-bold text-base mb-3">Title</label>
          <input type="text" className="outline-none border-[1px] rounded-xl px-4 py-2 mb-5" placeholder="Enter title article here ..." />
          <label className="font-bold text-base mb-3">Thumbnail</label>
          <input
            type="file"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-green-forest hover:file:bg-gray-100 cursor-pointer mb-5"
          />
        </div>
        <label className="font-bold text-base mb-3">Main Article</label>
        <ReactQuill theme="snow" value={value} onChange={setValue} className="h-80 mt-3" />
        <button
          className="px-5 py-2 font-bold bg-green-forest text-white  mt-14 rounded-xl"
          onClick={() => {
            setSubmit(value);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateArticle;
