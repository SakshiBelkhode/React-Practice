import "./WeatherCard.css";

function WeatherCard({ weather }) {

  return (

    <div className="weather-card">

      <h2>{weather.name}</h2>

      <h1>{weather.main.temp}°C</h1>

      <p>{weather.weather[0].main}</p>

      <div className="details">

        <div>
          <span>Humidity</span>
          <p>{weather.main.humidity}%</p>
        </div>

        <div>
          <span>Wind</span>
          <p>{weather.wind.speed} m/s</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;