import { useState } from "react";

function App() {

  // Step 1: Create state
  const [status, setStatus] = useState(false);

  // Step 2: Function to change state  If false - becomes True ---If true - becomes false
  function handleClick() {
    setStatus(!status);
  }

  return (
    <div className="container">

      <h1>Simple Toggle App</h1>

      {/* Step 3: Show ON or OFF */}
      <h2>{status ? "ON" : "OFF"}</h2>

      {/* Step 4: Button */}
      <button onClick={handleClick}>
        Toggle
      </button>

    </div>
  );
}

export default App;