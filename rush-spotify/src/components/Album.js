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
            <div className="card">
                <img src={album.cover_small} key={album.id} alt={album.name + " album"}></img>
            </div>
        ))}
    </>)
}

export default Album;