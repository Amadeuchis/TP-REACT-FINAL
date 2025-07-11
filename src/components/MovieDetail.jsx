import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dfa7224f541dc8ab20a21dc4550f2475&language=es-ES`
    )
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Cargando detalles...</p>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Volver</Link>
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=Sin+imagen'
        }
        alt={movie.title}
      />
      <p><strong>Descripción:</strong> {movie.overview || 'No disponible'}</p>
      <p><strong>Popularidad:</strong> {movie.popularity}</p>
      <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
      <p><strong>Votos:</strong> {movie.vote_average}</p>
    </div>
  );
}
