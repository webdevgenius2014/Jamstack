import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

const MovieGrid = React.memo(({
  movies,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  watchlistIds
}) => {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h3>No movies found</h3>
        <p>Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
          isInWatchlist={watchlistIds.has(movie.id)}
        />
      ))}
    </div>
  );
});

MovieGrid.displayName = 'MovieGrid';

export default MovieGrid;
