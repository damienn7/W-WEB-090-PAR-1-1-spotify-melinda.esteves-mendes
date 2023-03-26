import React, { useState, useEffect } from 'react';

function Artist() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/artists')
      .then(response => response.json())
      .then(data => setArtists(data));
  }, []);

  return (
    <div>
      <h2>List of Artists</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Artist;