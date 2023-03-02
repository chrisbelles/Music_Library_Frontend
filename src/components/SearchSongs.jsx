import React, { useState } from 'react';

function SearchSongs({ searchSongs }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSongs(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" placeholder="Search Music Library" value={query} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchSongs;

