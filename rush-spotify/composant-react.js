import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GenreDetail() {
  const [genre, setGenre] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/genres/${id}`)
      .then(response => {
        setGenre(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!genre) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>{genre.name}</h2>
      <p>Description: {genre.description}</p>
      <p>Origine: {genre.origin}</p>
    </div>
  );
}

export default GenreDetail;
