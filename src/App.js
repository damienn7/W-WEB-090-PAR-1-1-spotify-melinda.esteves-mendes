import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import AlbumDetail from './pages/AlbumDetail';
import Genre from './pages/Genre';
import GenreDetail from './pages/GenreDetail';
import Artist from './pages/Artist';

  function App() {
    return (
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/genres">Genre</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/search">Recherche</Link></li>
            <li><Link to="/artist">Artiste</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/genres" element={<Genre />} />
          <Route path="/genres/:id" element={<GenreDetail />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/albums/:id" element={<AlbumDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </div>
  );
}

export default App;
