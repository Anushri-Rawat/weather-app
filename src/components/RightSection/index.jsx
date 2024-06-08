import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import WeatherCard from "../WeatherCard";
import "./rightSection.css";
import HighLightCard from "../HighlightCard";
import { FaSun, FaMoon } from "react-icons/fa";

const RightSection = () => {
  const {
    state: { weatherData, theme },
    dispatch,
  } = useContext(WeatherContext);

  const currData = weatherData?.current;

  function tempCoverterHandler(e) {
    if (e.target.textContent.indexOf("F") > 0) {
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <section className="right-wrapper">
      <div className="weather-container">
        <div className="converter-wrapper">
          <button className="active" onClick={tempCoverterHandler}>
            &deg;C
          </button>
          <button onClick={tempCoverterHandler}>&deg;F</button>
          <div className="theme-block">
            {theme === "light" ? (
              <FaSun
                style={{ color: theme === "light" ? "#000" : "#fff" }}
                onClick={toggleTheme}
              />
            ) : (
              <FaMoon
                style={{ color: theme === "light" ? "#000" : "#fff" }}
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>
        <div className="weather-card-wrapper" onClick={tempCoverterHandler}>
          {weatherData?.daily.slice(1, 6).map((weather, index) => (
            <WeatherCard key={weather.dt} index={index} weather={weather} />
          ))}
        </div>
        <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>
          Today's Highlights
        </h1>
        <div className="highlight-card-wrapper">
          <HighLightCard
            title="Wind status"
            value={currData?.wind_speed.toFixed(0)}
            unit="mph"
            wind_direction={currData.wind_deg}
          />
          <HighLightCard
            title="Humidity"
            value={currData?.humidity}
            unit="%"
            meter="true"
          />
          <HighLightCard
            title="Visibility"
            value={(currData?.visibility * 0.000621).toFixed(1)}
            unit="miles"
          />
          <HighLightCard
            title="Air Pressure"
            value={currData?.pressure.toFixed(0)}
            unit="mb"
          />
        </div>
      </div>
    </section>
  );
};
export default RightSection;
