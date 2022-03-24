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

const generateImage = (weather) => {
  let imgSrc = "";

  switch (weather) {
    case "sn":
      imgSrc = Snow;
      break;
    case "sl":
      imgSrc = Sleet;
      break;
    case "h":
      imgSrc = Hail;
      break;
    case "t":
      imgSrc = Thunderstorm;
      break;
    case "hr":
      imgSrc = HeavyRain;
      break;
    case "lr":
      imgSrc = LightRain;
      break;
    case "s":
      imgSrc = Shower;
      break;
    case "hc":
      imgSrc = HeavyCloud;
      break;
    case "lc":
      imgSrc = LightCloud;
      break;
    case "c":
      imgSrc = Clear;
      break;

    default:
      imgSrc = Clear;
      break;
  }

  return imgSrc;
};

export default generateImage;
