import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isRecoverOpen, setIsRecoverOpen] = useState(false);

  // functions to manage signup and signin modals
  const toggleSignupPopup = () => {
    setIsSignupOpen(!isSignupOpen);
  };
  const toggleSigninPopup = () => {
    setIsSigninOpen(!isSigninOpen);
  };
  const toggleRecoverPopup = () => {
    setIsRecoverOpen(!isRecoverOpen);
  };

  // search input state management
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch search results
  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://cue-api-3tyr.onrender.com/search?query=${query}`
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
        isSignupOpen,
        toggleSignupPopup,
        isSigninOpen,
        toggleSigninPopup,
        isRecoverOpen,
        toggleRecoverPopup,
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
