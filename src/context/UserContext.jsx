// import { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       setUser({ name: 'John Doe', email: 'johndoe@example.com' }); // Mock user data
//     }
//   }, []);

//   const login = (userData) => {
//     setIsLoggedIn(true);
//     setUser(userData);
//     localStorage.setItem('token', 'your-token-here'); 
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     localStorage.removeItem('token'); 
//   };

//   return (
//     <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
