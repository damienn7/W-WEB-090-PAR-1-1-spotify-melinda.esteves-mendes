import { useEffect, useState } from 'react';

const Album = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/albums')
            .then(response => response.json())
            .then(data => setAlbums(data))
    }, []);
    return (<>
        {albums.map((album) => (
            <div className="card" id={album.id}>
                <img src={album.cover_small} key={album.id} alt={album.name + " album"}></img>
                <h2 className="active">{album.name}</h2>
                <p className="inactive">{album.description}</p>
                <p className="active">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(album.release_date)}</p>
            </div>
        // {document.querySelector(album.id)}
        ))}
    </>)
}

export default Album;