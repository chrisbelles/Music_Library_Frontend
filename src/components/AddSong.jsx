import React, { useState } from 'react';

const styles = {
    label:  {
        float: 'left'
    },
    titleInput: {
        marginLeft : '10%',
        width : '60%'
    },
    artistInput: {
        marginLeft : '10%',
        width : '60%',
    },
    albumInput: {
        marginLeft : '10%',
        width : '60%'
    },
    releaseDateInput: {
        marginLeft : '10%',
        width : '60%',
    },
    genreInput: {
        marginLeft : '10%',
        width : '60%'
},

}

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
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid' style={{}}>
            <div className='form-group' style={{padding: '2%'}}>
                <label className="text-muted" style={styles.label}>Title :</label>
                <input type='title' className="form-control" style={styles.titleInput} value={title}onChange={(event) => setTitle(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Artist :</label>
                <input type='artist' className="form-control" style={styles.artistInput} value={artist}onChange={(event) => setArtist(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Album :</label>
                <input type='album' className="form-control" style={styles.albumInput} value={album}onChange={(event) => setAlbum(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Release Date :</label>
                <input type='release_date' className="form-control" style={styles.releaseDateInput} value={release_date}onChange={(event) => setReleaseDate(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Genre :</label>
                <input type='genre' className="form-control" style={styles.genreInput} value={genre}onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit' className="btn btn-primary" style={{'marginTop':'1em',float:"right",'border-radius': '20px'}}>Create</button>
        </form>

     );
}
 
export default AddSong;