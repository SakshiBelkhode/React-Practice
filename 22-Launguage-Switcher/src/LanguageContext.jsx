import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};