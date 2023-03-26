import './App.css';
import Album from './components/Album.js';

function App() {
  return (

    <div className="App">
      <header className="header">
        <ul className="header">
          <li className="active">
            <span className="material-symbols-outlined">
              home
            </span>
            Accueil
          </li>
          <li className="inactive">
            <span className="material-symbols-outlined">
              search
            </span>
            Rechercher
          </li>
          <li className="inactive">
            <span className="material-symbols-outlined">
              video_library
            </span>
            Albums
          </li>
          <li className="inactive">
            <span className="material-symbols-outlined">
              person
            </span>
            Artists
          </li>

        </ul>
      </header>
      <div className="container">
        <h1 className="active">Albums</h1>
        <Album/>
      </div>
    </div>
  );
}

export default App;
