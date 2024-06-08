const generateImage = (weather, id, icon) => {
  let imgSrc = "";

  switch (weather) {
    case "Snow":
      imgSrc = "/assests/Snow.png";
      break;
    case "Haze":
      imgSrc = "/assests/Sleet.png";
      break;
    case "Fog":
      imgSrc = "/assests/Hail.png";
      break;
    case "Thunderstrom":
      imgSrc = "/assests/Thunderstorm.png";
      break;
    case "Rain":
      if (id === 500) imgSrc = "/assests/LightRain.png";
      else imgSrc = "/assests/HeavyRain.png";
      break;
    case "Drizzle":
      imgSrc = "/assests/Shower.png";
      break;
    case "hc":
      if (id <= 802) imgSrc = "/assests/LightCloud.png";
      else imgSrc = "/assests/HeavyCloud.png";
      break;
    case "Clear":
      imgSrc = "/assests/Clear.png";
      break;

    default:
      imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      break;
  }

  return imgSrc;
};

export default generateImage;
