import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm); // Replace this with your search logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-5-5m0 0l-5 5m5-5v12" />
            </svg>
          </button>
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="py-2 text-sm text-gray-900 bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;