import React, { useState } from 'react';

const styles = {
    label:  {
        float: 'left'
    },
    titleInput: {
        marginLeft : '5.45rem',
        width : '30%'
    },
    artistInput: {
        marginLeft : '5rem',
        width : '30%',
    },
    albumInput: {
        marginLeft : '4.5rem',
        width : '30%'
    },
    releaseDateInput: {
        marginLeft : '2.05rem',
        width : '30%',
    },
    genreInput: {
        marginLeft : '4.85rem',
        width : '30%'
    },
    container: {
        padding: '2em',
        background: '#acacac',
        borderRadius: '20px'
    },
    button: {
        marginTop: '1em',
        float: 'right',
        borderRadius: '20px'
    },
};

const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
          title: title,
          artist: artist,
          album: album,
          release_date: release_date,
          genre: genre
        };
        console.log(newEntry)
        props.addSong(newEntry)
          .then(() => {
            window.alert('Song added successfully!');

          })
          .catch((error) => {
            console.log(error);
            window.alert("Failed to create new entry. Please check your entry");
          });
      }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid' style={styles.container}>
            <h2 style={{ textAlign: 'left', marginBottom: '1em' }}>Add a song to Library</h2>
            <div className='form-group' style={{}}>
                <label className="text-muted" style={styles.label}>Title :</label>
                <input type='title' className="form-control" style={styles.titleInput} placeholder="Enter title here." value={title}onChange={(event) => setTitle(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Artist :</label>
                <input type='artist' className="form-control" style={styles.artistInput} placeholder="Enter artist here." value={artist}onChange={(event) => setArtist(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Album :</label>
                <input type='album' className="form-control" style={styles.albumInput} placeholder="Enter album here." value={album}onChange={(event) => setAlbum(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Release Date :</label>
                <input type='release_date' className="form-control" style={styles.releaseDateInput} placeholder="YYYY-MM-DD" value={release_date}onChange={(event) => setReleaseDate(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Genre :</label>
                <input type='genre' className="form-control" style={styles.genreInput} placeholder="Enter genre here." value={genre}onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit' style={styles.button}>Create</button>
        </form>
     );
}
 
export default AddSong;
