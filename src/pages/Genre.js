import React, { useEffect, useState } from 'react';
import Card from '../component/card';
import { Link } from "react-router-dom";

const Genre = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/genres')
        .then(response => response.json())
        .then(data => {
        setGenres(data);
        console.log(data);
      })
  }, []);
    return (
        <div>
            <h2>List of genres</h2>
            <ul>
            {genres.map(genre => (
                <Link to={`/genres/${genre.id}`} key={genre.id}>
                    <Card 
                    key={genre.id}
                    name={genre.name}
                    />
                </Link>
            ))}
          </ul>
        </div>
    )
}

export default Genre;