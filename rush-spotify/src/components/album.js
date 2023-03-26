import { useEffect, useState } from 'react';

const Album = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/albums')
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }, []);

    return (
        <>
        {
            albums.map((album) => (
                    <div className="card">
                        <img src={album.cover_small} key={album.id} alt={album.name + " album"} />
                        <p className="album-id" key={album.id}>{album.id}</p>
                    </div>
            ))
        }
        </>
    )
}

export default Album;