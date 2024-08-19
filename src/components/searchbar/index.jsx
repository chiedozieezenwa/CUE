import { useContext } from 'react'
import design from './design.module.css'
import { UserContext } from '../../context/appContext'

export const SearchBar = ({onSearch}) => {
   const { query, setQuery, fetchSearchResults } = useContext(UserContext)
    const handleSearch = (e) => {
      e.preventDefault();
        if (onSearch && query.trim()) {
            fetchSearchResults(query)
        }
    };


  return (
    <form className={design.container} onClick={handleSearch}>
      <div className={design.searchContainer}>
        <input
          type="text"
          placeholder="search hotels"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={design.searchBar}
        />
        <button className={design.searchBtn}>
          Search
        </button>
      </div>
    </form>
  );
}
