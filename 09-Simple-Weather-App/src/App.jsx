import { useState } from "react";
import axios from "axios";

function App() {

  // 1️⃣ States
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "9306406bfc62f009f83e4b8d2165b9ea";

  // 2️⃣ Fetch Weather (using async/await)
  const getWeather = async () => {

    if (city.trim() === "") return;

    try {

      setLoading(true);
      setError("");
      setWeather(null);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);

    } catch (err) {

      setError("City not found");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="app">

      <h1>Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>
          Search
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp} °C</h3>
          <p>{weather.weather[0].main}</p>

          <div className="details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;