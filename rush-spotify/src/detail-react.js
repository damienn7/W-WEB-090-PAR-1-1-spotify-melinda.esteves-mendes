import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GenreDetail(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/genres/${props.match.params.id}/albums`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  return (
    <div className="container">
      <h1>Albums</h1>
      <div className="row">
        {albums.map((album) => (
          <div className="col-md-4" key={album.id}>
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src={album.cover} alt={album.name} />
              <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p className="card-text">{album.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={`/albums/${album.id}`} className="btn btn-sm btn-outline-secondary">Voir l'album</a>
                  </div>
                  <small className="text-muted">{album.release_date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreDetail;
// import { BrowserRouter, Route } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GenreDetailPage = ({ match, history }) => {
//   const [genre, setGenre] = useState(null);
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const { genreId } = match.params;

//     axios.get(`http://localhost:8000/genres/${genreId}`)
//       .then(res => setGenre(res.data))
//       .catch(err => console.log(err));

//     axios.get(`http://localhost:8000/genres/${genreId}/albums`)
//       .then(res => setAlbums(res.data))
//       .catch(err => console.log(err));
//   }, [match.params]);

//   const handleClick = (albumId) => {
//     history.push(`/albums/${albumId}`);
//   }

//   if (!genre) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Détail du genre {genre.name}</h1>
//       <p>{genre.description}</p>
//       <h2>Liste des albums</h2>
//       <ul>
//         {albums.map(album => (
//           <li key={album.id} onClick={() => handleClick(album.id)}>
//             {album.title} - {album.artist}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GenreDetailPage;
