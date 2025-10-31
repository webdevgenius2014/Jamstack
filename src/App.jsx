import { useState, useEffect, useMemo, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import Watchlist from './components/Watchlist';
import { searchMovies } from './data/movies';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/helpers';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'watchlist'

  // Load watchlist from localStorage on mount
  useEffect(() => {
    const savedWatchlist = loadFromLocalStorage('movieWatchlist', []);
    setWatchlist(savedWatchlist);
  }, []);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    saveToLocalStorage('movieWatchlist', watchlist);
  }, [watchlist]);

  // Initial load of all movies
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const results = await searchMovies('');
      setMovies(results);
      setIsLoading(false);
    };
    loadMovies();
  }, []);

  // Handle search with proper async handling
  const handleSearch = useCallback(async (query) => {
    setIsLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setIsLoading(false);
  }, []);

  // Add movie to watchlist with duplicate prevention
  const handleAddToWatchlist = useCallback((movie) => {
    setWatchlist(prevWatchlist => {
      // Check if movie is already in watchlist
      const isAlreadyInWatchlist = prevWatchlist.some(item => item.id === movie.id);

      if (isAlreadyInWatchlist) {
        console.log('Movie already in watchlist');
        return prevWatchlist; // Return previous state unchanged
      }

      // Add movie to watchlist
      return [...prevWatchlist, movie];
    });
  }, []);

  // Remove movie from watchlist
  const handleRemoveFromWatchlist = useCallback((movieId) => {
    setWatchlist(prevWatchlist =>
      prevWatchlist.filter(movie => movie.id !== movieId)
    );
  }, []);

  // Memoize watchlist IDs set for efficient lookup
  const watchlistIds = useMemo(() => {
    return new Set(watchlist.map(movie => movie.id));
  }, [watchlist]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <h1 className="app-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
              </svg>
              Movie Watchlist
            </h1>
            <p className="app-subtitle">Discover and save your favorite movies</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
              onClick={() => setActiveTab('browse')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Browse Movies
            </button>
            <button
              className={`tab ${activeTab === 'watchlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('watchlist')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              My Watchlist
              {watchlist.length > 0 && (
                <span className="tab-badge">{watchlist.length}</span>
              )}
            </button>
          </div>

          {activeTab === 'browse' ? (
            <>
              <SearchBar onSearch={handleSearch} />

              {isLoading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>Loading movies...</p>
                </div>
              ) : (
                <MovieGrid
                  movies={movies}
                  onAddToWatchlist={handleAddToWatchlist}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlistIds={watchlistIds}
                />
              )}
            </>
          ) : (
            <Watchlist
              movies={watchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>Movie Watchlist App • Built with React + Vite</p>
          <p className="footer-note">Educational debugging concept app</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
