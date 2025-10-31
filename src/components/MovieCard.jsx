import React from 'react';
import { formatRuntime } from '../utils/helpers';
import './MovieCard.css';

const MovieCard = React.memo(({ movie, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist }) => {
  const { title, year, rating, genre, runtime, director, plot, poster } = movie;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={`${title} poster`} loading="lazy" />
        <div className="movie-rating">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>{rating}</span>
        </div>
      </div>

      <div className="movie-content">
        <div className="movie-header">
          <h3 className="movie-title">{title}</h3>
          <span className="movie-year">{year}</span>
        </div>

        <div className="movie-meta">
          <span className="movie-genre">{genre}</span>
          <span className="movie-runtime">{formatRuntime(runtime)}</span>
        </div>

        <p className="movie-plot">{plot}</p>

        <div className="movie-director">
          <strong>Director:</strong> {director}
        </div>

        <div className="movie-actions">
          {isInWatchlist ? (
            <button
              className="btn btn-remove"
              onClick={() => onRemoveFromWatchlist(movie.id)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Remove from Watchlist
            </button>
          ) : (
            <button
              className="btn btn-add"
              onClick={() => onAddToWatchlist(movie)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Add to Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
