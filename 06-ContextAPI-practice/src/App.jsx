import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: dark ? "#222" : "#eee",
      color: dark ? "#fff" : "#000",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <button onClick={toggleTheme}>
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>

      <Navbar />
      <Profile />
      <Settings />
    </div>
  );
}

export default App;