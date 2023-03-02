import React, { useState } from 'react';

const styles = {

  searchInput: {
      marginLeft : '5.45rem',
      width : '30%'
  }
};

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
        <input type="text" style={(styles.searchInput)} placeholder="Search Library by Title, Artist, Album, Release Date, or Genre" value={query} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchSongs;

