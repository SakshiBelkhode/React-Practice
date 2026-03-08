import { createContext, useState } from "react";

// create context
export const FontContext = createContext();

// provider component
export const FontProvider = ({ children }) => {

  const [fontSize, setFontSize] = useState(16);

  const increaseFont = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFont = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <FontContext.Provider value={{ fontSize, increaseFont, decreaseFont }}>
      {children}
    </FontContext.Provider>
  );
};