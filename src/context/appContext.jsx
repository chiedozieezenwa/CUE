import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch search results
  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://cue-backend.onrender.com/search?query=${query}`
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        query,
        setQuery,
        results,
        loading,
        fetchSearchResults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
