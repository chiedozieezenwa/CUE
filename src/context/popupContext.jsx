import { createContext, useState } from "react";

export const PopupContext = createContext();


export const PopupProvider = ({ children }) => {
  const [currentPopup, setCurrentPopup] = useState(null);

  const openPopup = (popupName) => {
    console.log("Opening Popup: ", popupName); // Debug log
    setCurrentPopup(popupName);
  };
  
  const closePopup = () => {
    setCurrentPopup(null);
  };

  return (
    <PopupContext.Provider
      value={{
        currentPopup,
        openPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
