import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const App = () => {

  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>
        {language === "english"
          ? "Hello, Welcome!"
          : "नमस्ते, आपका स्वागत है!"}
      </h1>

      <button onClick={toggleLanguage}>
        Change Language
      </button>

    </div>
  );
};

export default App;