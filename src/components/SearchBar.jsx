import { useState, useCallback } from 'react';
import { debounce } from '../utils/helpers';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  // Debounced search - prevents excessive API calls
  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies by title, genre, director, or year..."
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <button className="clear-button" onClick={handleClear} aria-label="Clear search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
