import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="card-link">
      <div className="card">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/500x750?text=Sin+imagen'
          }
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </Link>
  );
}
