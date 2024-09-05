import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LodgingContext = createContext();

export const LodgingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState({
    propertyType: [],
    conveniences: [],
    minPrice: "",
    maxPrice: "",
  });
  

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://cuedemo.onrender.com/api/v1/hotels", {
        params: filters
      });
      setHotels(response.data.data.hotels);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <LodgingContext.Provider
      value={{
        loading,
        count,
        hotels,
        filters,
        setFilters,
        fetchHotels,
        handleFilterChange,
        decrement,
        increment,
      }}
    >
      {children}
    </LodgingContext.Provider>
  );
};