import "./WeatherCard.css";
import generateImage from "./imageGenerator/ImageGenerator";
const WeatherCard = (props) => {
  return (
    <div className="card">
      <h2 className="date">
        {props.index == 1
          ? "Tomorrow"
          : new Date(props.weather.applicable_date).toDateString().slice(0, 10)}
      </h2>
      <img
        src={generateImage(props.weather.weather_state_abbr)}
        alt={props.weather.weather_state_name}
        className="weatherimg"
      />
      <div className="temp-range">
        <span className="max-temp temp cel">
          {props.weather.max_temp.toFixed(0)}&deg;C
        </span>
        <span className="max-temp temp far" style={{ display: "none" }}>
          {(props.weather.max_temp * (9 / 5) + 32).toFixed(0)}&deg;F
        </span>
        <span className="min-temp temp cel">
          {props.weather.min_temp.toFixed(0)}&deg;C
        </span>
        <span className="min-temp temp far" style={{ display: "none" }}>
          {(props.weather.max_temp * (9 / 5) + 32).toFixed(0)}&deg;F
        </span>
      </div>
    </div>
  );
};
export default WeatherCard;
