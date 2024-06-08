import "./weatherCard.css";
import generateImage from "../../utils/ImageGenerator";
const WeatherCard = ({ weather, index }) => {
  const currDate = new Date(weather?.dt * 1000).toDateString().split(" ");
  const formattedDate = `${currDate[0]} , ${currDate[1]} ${currDate[2]}`;

  return (
    <div className="card">
      <h2 className="date">{index === 0 ? "Tomorrow" : formattedDate}</h2>
      <img
        src={generateImage(
          weather?.weather[0].main,
          weather?.weather[0].id,
          weather?.weather[0].icon
        )}
        alt={weather?.weather[0]?.description}
        className="weatherimg"
      />
      <div className="temp-range">
        <span className="max-temp temp cel">
          {(weather?.temp.max - 273).toFixed(0)}&deg;C
        </span>
        <span className="max-temp temp far" style={{ display: "none" }}>
          {((weather?.temp.max - 273) * (9 / 5) + 32).toFixed(0)}&deg;F
        </span>
        <span className="min-temp temp cel">
          {(weather?.temp.min - 273).toFixed(0)}&deg;C
        </span>
        <span className="min-temp temp far" style={{ display: "none" }}>
          {((weather.temp.min - 273) * (9 / 5) + 32).toFixed(0)}&deg;F
        </span>
      </div>
    </div>
  );
};
export default WeatherCard;
