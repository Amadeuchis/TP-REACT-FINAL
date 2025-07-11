import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../App.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=dfa7224f541dc8ab20a21dc4550f2475&language=es-ES&page=1'
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ textAlign: 'center' }}>🎬 Explorador de Películas</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar película..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 250px))',
          gap: '20px',
          justifyContent: 'center', // CENTRADO AQUÍ
        }}
      >
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
