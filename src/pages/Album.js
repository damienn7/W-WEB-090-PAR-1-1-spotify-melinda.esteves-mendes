import React, {useState, useEffect} from "react";
import Card from "../component/card";
import { Link } from "react-router-dom";

const Album = () => {

    const [albums, setAlbums] = useState([]);

      useEffect(() => {
        fetch('http://localhost:8000/albums')
        .then(response => response.json())
        .then(data => {
        setAlbums(data);
        const sortedAlbums = data.sort((a, b) => a.name.localeCompare(b.name));
        setAlbums(sortedAlbums);
      })
  }, []);

    return (
        <div className="container-album">
            <h2>List of all albums</h2>
            <ul>
                {albums.map(album => (
                    <Link to={`/albums/${album.id}`} key={album.id}>
                        <Card name={album.name} image={album.cover_small} />
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Album;