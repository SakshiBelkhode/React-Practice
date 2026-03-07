import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const App = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Theme Toggle App</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </div>
  );
};

export default App;