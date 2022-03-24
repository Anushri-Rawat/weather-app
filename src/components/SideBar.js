import { useContext, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import WeatherContext from "../components/context/WeatherContext";
import generateImage from "./imageGenerator/ImageGenerator";
import "./SideBar.css";
import SideBarMenu from "./SideBarMenu";
const Sidebar = () => {
  const Weatherctx = useContext(WeatherContext);
  const { title, consolidated_weather } = Weatherctx.cityWeatherData;
  const { applicable_date, the_temp, weather_state_name, weather_state_abbr } =
    consolidated_weather[0];
  const [showMenu, setShowMenu] = useState(false);
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
          onClick={() => Weatherctx.getDataFromLocation("new delhi")}
        >
          <BiCurrentLocation />
        </button>
      </header>
      <div className="weather-info">
        <div className="weather-icon">
          <img src={generateImage(weather_state_abbr)} />
        </div>
        <div className="current-temp">
          <span className="value temp cel">
            {the_temp.toFixed(2)}
            <span className="unit">&deg;C</span>
          </span>
          <span className="value temp far" style={{ display: "none" }}>
            {(the_temp * (9 / 5) + 32).toFixed(2)}
            <span className="unit">&deg;F</span>
          </span>
        </div>
        <h1 className="weather-title">{weather_state_name}</h1>
        <div className="day-and-date">
          <span className="day">Today</span>
          <span className="curr-date">{applicable_date}</span>
        </div>
        <div className="current-location">
          <HiLocationMarker /> {title}
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
