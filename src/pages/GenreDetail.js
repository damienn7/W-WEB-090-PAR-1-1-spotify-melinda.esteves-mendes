import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GenreDetail = () => {

    const { id } = useParams(); // Récupère l'ID de l'album dans les paramètres de l'URL
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/genres/${id}`)
          .then(response => {
            if (response.headers.get("content-type").includes("application/json")) {
              return response.json();
            } else {
              throw new TypeError("Response was not in JSON format.");
            }
          })
          .then(data => {
            setGenre(data);
            console.log(data);
        })
          .catch(error => console.log(error));
      }, [id]);

    return (
        <div>
            {genre && (
            <h2>{genre.name}</h2>
            )}
        </div>
    )
}

export default GenreDetail;