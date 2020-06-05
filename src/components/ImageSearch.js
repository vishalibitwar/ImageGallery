import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className=' w-11/12 bg-white shadow-md px-2 rounded overflow-hidden my-10 mx-auto sm:max-w-sm '>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center justify-center py-2">
        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Category..." />
        <button className="flex-shrink-0 bg-gray-600 hover:bg-gray-700 mx-2 border-gray-600 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none " type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default ImageSearch;