import { useState } from "react";

function App() {

  // 1️⃣ State for theme
  const [darkMode, setDarkMode] = useState(false);

  // 2️⃣ Toggle function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <h1>Theme Toggler App</h1>

      <p>
        This is a simple React theme toggling example.
      </p>

      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
      </button>

    </div>
  );
}

export default App;