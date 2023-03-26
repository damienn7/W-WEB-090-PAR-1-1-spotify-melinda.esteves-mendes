// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function GenreList() {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     axios.get('/api/genres')
//       .then(response => {
//         setGenres(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Liste des genres</h2>
//       <ul>
//         {genres.map(genre => (
//           <li key={genre.id}>
//             <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GenreList;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function GenreList() {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/genres")
//       .then((response) => {
//         setGenres(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Liste des genres</h1>
//       <ul>
//         {genres.map((genre) => (
//           <li key={genre.id}>
//             <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GenreList;
import { useState, useEffect } from 'react';

function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/genres')
      .then(response => response.json())
      .then(data => setGenres(data))
      .catch(error => console.error(error));
  }, []);

  const handleGenreClick = (genreId) => {
    window.location.href = `/genres/${genreId}`;
  };

  return (
    <div>
      <h1>Liste des genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id} onClick={() => handleGenreClick(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
