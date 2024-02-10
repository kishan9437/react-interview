import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-details">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;