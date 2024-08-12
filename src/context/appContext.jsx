import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);

  // functions to manage signup and signin modals
  const toggleSignupPopup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  const toggleSigninPopup = () => {
    setIsSigninOpen(!isSigninOpen);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isSignupOpen,
        toggleSignupPopup,
        isSigninOpen,
        toggleSigninPopup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
