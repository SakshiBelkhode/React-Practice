import { useState, useEffect } from "react";
import "./App.css";

function App() {

  // 1️⃣ States
  const [time, setTime] = useState(0);       // total seconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // 2️⃣ useEffect for timer
  useEffect(() => {

    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);

  }, [running]);

  // 3️⃣ Format time into MM:SS
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // 4️⃣ Add lap
  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  // 5️⃣ Reset
  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="container">

      <h1>Advanced Stopwatch</h1>

      <h2>{formatTime()}</h2>

      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={addLap}>Lap</button>
      </div>

      {laps.length > 0 && (
        <div className="laps">
          <h3>Laps</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1} - {lap}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;