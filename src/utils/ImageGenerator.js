import Snow from "../assests/Snow.png";
import Sleet from "../assests/Sleet.png";
import Hail from "../assests/Hail.png";
import Thunderstorm from "../assests/Thunderstorm.png";
import HeavyRain from "../assests/HeavyRain.png";
import LightRain from "../assests/LightRain.png";
import Shower from "../assests/Shower.png";
import HeavyCloud from "../assests/HeavyCloud.png";
import LightCloud from "../assests/LightCloud.png";
import Clear from "../assests/Clear.png";

const generateImage = (weather, id, icon) => {
  let imgSrc = "";

  switch (weather) {
    case "Snow":
      imgSrc = Snow;
      break;
    case "Haze":
      imgSrc = Sleet;
      break;
    case "Fog":
      imgSrc = Hail;
      break;
    case "Thunderstrom":
      imgSrc = Thunderstorm;
      break;
    case "Rain":
      if (id === 500) imgSrc = LightRain;
      else imgSrc = HeavyRain;
      break;
    case "Drizzle":
      imgSrc = Shower;
      break;
    case "hc":
      if (id <= 802) imgSrc = LightCloud;
      else imgSrc = HeavyCloud;
      break;
    case "Clear":
      imgSrc = Clear;
      break;

    default:
      imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      break;
  }

  return imgSrc;
};

export default generateImage;
