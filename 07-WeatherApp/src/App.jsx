import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "9306406bfc62f009f83e4b8d2165b9ea";

  const getWeather = async (city) => {

    try {

      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);
      setLoading(false);

    } catch (err) {

      setError("City not found");
      setWeather(null);
      setLoading(false);
    }
  };

  return (

    <div className="app">

      <h1 className="title">Weather App</h1>

      <Search getWeather={getWeather} />

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}

    </div>
  );
}

export default App;