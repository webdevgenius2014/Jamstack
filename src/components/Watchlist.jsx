import React from 'react';
import MovieCard from './MovieCard';
import './Watchlist.css';

const Watchlist = ({ movies, onRemoveFromWatchlist }) => {
  if (movies.length === 0) {
    return (
      <div className="watchlist-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3>Your watchlist is empty</h3>
        <p>Add some movies to get started!</p>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <div className="watchlist-header">
        <h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
          My Watchlist
        </h2>
        <span className="watchlist-count">{movies.length} {movies.length === 1 ? 'movie' : 'movies'}</span>
      </div>

      <div className="watchlist-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRemoveFromWatchlist={onRemoveFromWatchlist}
            isInWatchlist={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
