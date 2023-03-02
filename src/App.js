import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSong from './components/AddSong';
import SearchSongs from './components/SearchSongs';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    console.log('Hello World');
  }, []);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  async function addSong(newSong) {
    const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    console.log(response.data);
    setSongs([...songs, response.data]);
  }

  async function searchSongs(query) {
    const response = await axios.get(`http://127.0.0.1:8000/api/music/`);
    const searchedSongs = response.data.filter(song => {
      const songTitle = song.title.toLowerCase();
      const songArtist = song.artist.toLowerCase();
      return songTitle.includes(query.toLowerCase()) || songArtist.includes(query.toLowerCase());
    });
    console.log(searchedSongs);
    setSongs(searchedSongs);
  }

  return (
    <div>
      <header style={{ background: '#acacac', height: '5rem', padding: '2px', borderRadius: '20px'  }}>
        <h1 style={{ marginLeft: '40%' }}>Music Library</h1>
      </header>
      <br />
      <br />
      <AddSong addSong={addSong} />
      <br />
      <br />
      <label style={{ marginLeft: '40%', padding: '2em'}}></label>
      <button style={{}} onClick={() => getAllSongs()}>
        See All Songs
      </button>
      <br />
      <br />
      <SearchSongs searchSongs={searchSongs} />
      <br />
      <br />
      <div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Artist</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Album</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Release Date</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Genre</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.id}</td>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.title}</td>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.artist}</td>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.album}</td>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.release_date}</td>
                <td style={{ padding: '0.5rem', textAlign: 'left' }}>{song.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
