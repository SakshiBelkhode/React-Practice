import { useState } from "react";
import "./Search.css";

function Search({ getWeather }) {

  const [city, setCity] = useState("");

  const handleSearch = () => {

    if(city.trim() === "") return;

    getWeather(city);
    setCity("");
  };

  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default Search;