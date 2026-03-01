import { useState, useEffect } from "react";

function App() {

  // 1️⃣ states
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // 2️⃣ useEffect for timer
  useEffect(() => {

    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // 3️⃣ cleanup function
    return () => clearInterval(interval);

  }, [running]);

  return (
    <div className="container">

      <h1>Stopwatch App</h1>

      <h2>{seconds} sec</h2>

      <div className="buttons">

        <button onClick={() => setRunning(true)}>
          Start
        </button>

        <button onClick={() => setRunning(false)}>
          Stop
        </button>

        <button onClick={() => {
          setSeconds(0);
          setRunning(false);
        }}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;