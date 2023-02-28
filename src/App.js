import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSong from './components/AddSong';

const styles = {
  button:  {
    float: 'right',
    background: 'black',
    color: 'white',
    padding: '10px 60px',
    margin: '10px 0px',
  }
}

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
      <header style={{background: "green",height: '6rem'}}>
        <h1>Music Library</h1>
      </header>
      <label>Click here to see all songs!</label>
      <button  className={(styles.button)} onClick={() => getAllSongs()}>Get All Songs</button>
      <AddSong />
    </div>
  );
}

export default App;
