import {useState, useEffect} from 'react';
import Card from '../component/card';

const ArtistDetail = () => {

    const [artists, setArtists] = useState([]);

      useEffect(() => {
    fetch('http://localhost:8000/artists')
      .then(response => response.json())
      .then(data => {
        setArtists(data);
        console.log(data); // Here's the console.log statement
      })
  }, []);


    return (
        <div>
          <h2>List of Artists</h2>
          <ul>
            {artists.map(artist => (
            <Card 
            key={artist.id}
            name={artist.name}
            image={artist.photo}
            description={artist.bio}
            />
            ))}
          </ul>
        </div>
      );
    }

export default ArtistDetail;