import { useContext, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import WeatherContext from "../../context/WeatherContext";
import generateImage from "../../utils/ImageGenerator";
import "./sideBar.css";
import SideBarMenu from "./SideBarMenu";
import { getCurrentLoactionWeather } from "../../actions/helperFunction";

const SideBar = () => {
  const {
    state: { weatherData, city },
    dispatch,
  } = useContext(WeatherContext);

  const data = weatherData?.current;

  const [showMenu, setShowMenu] = useState(false);

  const currDate = new Date().toDateString().split(" ");
  const formattedDate = `${currDate[0]} , ${currDate[1]} ${currDate[2]}`;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="sidebar">
      {showMenu && <SideBarMenu toggleMenu={toggleMenu} />}
      <header className="sidebar-header">
        <button className="search-btn" onClick={toggleMenu}>
          Search for places
        </button>
        <button
          className="gps-icon"
          onClick={() => getCurrentLoactionWeather(dispatch)}
        >
          <BiCurrentLocation />
        </button>
      </header>
      <div className="weather-info">
        <div className="weather-icon">
          <img
            src={generateImage(
              data?.weather[0].main,
              data?.weather[0].id,
              data?.weather[0].icon
            )}
            alt="xyz"
          />
        </div>
        <div className="current-temp">
          <div className="value temp cel">
            {(data?.temp - 273).toFixed(1)}
            <span className="unit">&deg;C</span>
          </div>
          <div className="value temp far" style={{ display: "none" }}>
            {((data?.temp - 273) * (9 / 5) + 32).toFixed(2)}
            <span className="unit">&deg;F</span>
          </div>
        </div>
        <h1 className="weather-title">{data?.weather[0].main}</h1>
        <div className="day-and-date">
          <span className="day">Today</span>
          <span className="curr-date">{formattedDate}</span>
        </div>
        <div className="current-location">
          <HiLocationMarker />
          {city},{weatherData?.timezone.split("/")[0]}
        </div>
      </div>
    </section>
  );
};
export default SideBar;
