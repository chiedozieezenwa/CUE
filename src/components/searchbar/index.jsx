import { useContext } from 'react';
import design from './design.module.css';
import { SearchContext } from '../../context/searchContext';

export const SearchBar = ({placeholder}) => {
  const { query, setQuery, setSearchResults } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Search query:", query); // Log the query to ensure it's correct
  
      const response = await fetch(`https://cue-api-3tyr.onrender.com/api/v1/hotels?name=${query}&location=${location}`);
      const data = await response.json();
      
      console.log("API response data:", data); // Log the entire response for debugging
      console.log("API response data hotel:", data.data.hotels); // Log the entire response for debugging
  
      if (response.ok) {
        if (data.data.hotels && data.data.hotels.length > 0) {
          setSearchResults(data.data.hotels);
          console.log("Hotels found:", data.data.hotels);
        } else {
          console.log("No hotels found for the given query.");
          setSearchResults([]); // Set an empty array if no results are found
        }
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
