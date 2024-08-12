import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isRecoverOpen, setIsRecoverOpen] = useState (false);

  // functions to manage signup and signin modals
  const toggleSignupPopup = () => {setIsSignupOpen(!isSignupOpen)};
  const toggleSigninPopup = () => {setIsSigninOpen(!isSigninOpen)};
  const toggleRecoverPopup = () => {setIsRecoverOpen(!isRecoverOpen)}

  return (
    <UserContext.Provider
      value={{
        isSignupOpen,
        toggleSignupPopup,
        isSigninOpen,
        toggleSigninPopup,
        isRecoverOpen,
        toggleRecoverPopup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
