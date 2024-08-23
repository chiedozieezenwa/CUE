import { useContext } from 'react';
import design from './design.module.css';
import { SearchContext } from '../../context/searchContext';

export const SearchBar = ({placeholder}) => {
  const { query, setQuery, setSearchResults } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://cue-api-3tyr.onrender.com/api/v1/hotels?search=${query}`);
      const data = await response.json();
    
      if (response.ok) {
        setSearchResults(data.hotels); 
      } else {
        console.error('Search failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred while fetching the search results:', error);
    }
  };

  return (
    <form className={design.container} onSubmit={handleSearch}>
      <div className={design.searchContainer}>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={design.searchBar}
        />
        <button type="submit" className={design.searchBtn}>
          Search
        </button>
      </div>
    </form>
  );
};
