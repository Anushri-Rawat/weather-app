import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";
import "./RightSection.css";
import HighLightCard from "./HighLightCard";
const RightSection = () => {
  const ctx = useContext(WeatherContext);
  function tempCoverterHandler(e) {
    if (e.target.textContent.indexOf("F") > 0) {
      console.log("hello");
      e.target.classList.add("active");
      e.target.previousElementSibling.classList.remove("active");
      const temps = document.querySelectorAll(".temp");
      temps.forEach((temp) => {
        if (temp.classList.contains("cel")) {
          temp.style.display = "none";
        }
        if (temp.classList.contains("far")) {
          temp.style.display = "block";
        }
      });
    } else {
      e.target.classList.add("active");
      e.target.nextElementSibling.classList.remove("active");
      const temps = document.querySelectorAll(".temp");
      temps.forEach((temp) => {
        if (temp.classList.contains("far")) {
          temp.style.display = "none";
        }
        if (temp.classList.contains("cel")) {
          temp.style.display = "block";
        }
      });
    }
  }
  const data = ctx.cityWeatherData.consolidated_weather;
  return (
    <section className="right-wrapper">
      <div className="weather-container">
        <div className="converter-wrapper">
          <button className="active" onClick={tempCoverterHandler}>
            &deg;C
          </button>
          <button onClick={tempCoverterHandler}>&deg;F</button>
        </div>
        <div className="weather-card-wrapper" onClick={tempCoverterHandler}>
          {data.map((weather, index) => {
            if (index > 0) {
              return (
                <WeatherCard key={weather.id} weather={weather} index={index} />
              );
            }
          })}
        </div>
        <h1>Today's Highlights</h1>
        <div className="highlight-card-wrapper">
          <HighLightCard
            title="Wind status"
            value={data[0].wind_speed.toFixed(0)}
            unit="mph"
            wind_direction={data[0].wind_direction}
            additional={data[0].wind_direction_compass}
          />
          <HighLightCard
            title="Humidity"
            value={data[0].humidity}
            unit="%"
            meter="true"
          />
          <HighLightCard
            title="Visibility"
            value={data[0].visibility.toFixed(1)}
            unit="miles"
          />
          <HighLightCard
            title="Air Pressure"
            value={data[0].air_pressure.toFixed(0)}
            unit="mb"
          />
        </div>
      </div>
    </section>
  );
};
export default RightSection;
