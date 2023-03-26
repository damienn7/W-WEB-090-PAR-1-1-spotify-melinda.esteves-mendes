// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GenresPage = ({ history }) => {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/genres')
//       .then(res => setGenres(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleClick = (genreId) => {
//     history.push(`/genres/${genreId}`);
//   }

//   return (
//     <div>
//       <h1>Liste des genres</h1>
//       <ul>
//         {genres.map(genre => (
//           <li key={genre.id} onClick={() => handleClick(genre.id)}>
//             {genre.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GenresPage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GenresPage = ({ history }) => {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/genres')
//       .then(res => setGenres(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleClick = (genreId) => {
//     history.push(`/genres/${genreId}`);
//   }

//   return (
//     <div>
//       <h1>Liste des genres</h1>
//       <ul>
//         {genres.map(genre => (
//           <li key={genre.id} onClick={() => handleClick(genre.id)}>
//             {genre.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GenresPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/genres')
      .then(res => setGenres(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleClick = (genreId) => {
    window.location.href = `/genres/${genreId}`;
  }

  return (
    <div>
      <h1>Liste des genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id} onClick={() => handleClick(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;


