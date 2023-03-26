import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AlbumDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'album dans les paramètres de l'URL
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`)
      .then(response => {
        if (response.headers.get("content-type").includes("application/json")) {
          return response.json();
        } else {
          throw new TypeError("Response was not in JSON format.");
        }
      })
      .then(data => {
        setAlbum(data);
        console.log(data);
    })
      .catch(error => console.log(error));
  }, [id]);

  return (
    // bug avec l'api quand on fait album.name et album.album.name
    // Aucun moyen de résoudre ce bug pour le moment
    <div>
      <h2>{album.name}</h2>
      <img src={album.cover} />
      <p>{album.description}</p>
    </div>
  );
};

export default AlbumDetail;