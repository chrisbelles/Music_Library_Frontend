import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSong from './components/AddSong';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log('Hello World')
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  return (
    <div>
      <header style={{background: "gray",height: '5rem',padding: '2px'}}>
        <h1 style={{marginLeft: '40%'}}>Music Library</h1>
      </header>
      <br></br>
      <br></br>
      <AddSong />
      <br></br>
      <br></br>
      <label style={{marginLeft: '40%', padding:'3rem'}}>Click here to see all songs!</label>
      <button style={{}} onClick={() => getAllSongs()}>Get All Songs</button>
      <br></br>
      <br></br>
      <div>
        <table style={{}}>
          <thead>
            <tr>
              <th style={{padding: '4rem'}}>ID</th>
              <th style={{padding: '4rem'}}>Title</th>
              <th style={{padding: '4rem'}}>Artist</th>
              <th style={{padding: '4rem'}}>Album</th>
              <th style={{padding: '4rem'}}>Release Date</th>
              <th style={{padding: '4rem'}}>Genre</th>
            </tr>
          </thead>
          <tbody>
            {setSongs}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
