import { createContext, useEffect, useState } from "react";
const WeatherContext = createContext();
const BASE_URL = "https://www.metaweather.com/api/location";
export const WeatherContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityWeatherData, setCityWeatherData] = useState(null);
  const getDataFromLocation = async (title) => {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/search/?query=${title}`);
    const data = await res.json();
    if (data[0]) {
      fetchWoeidLocation(data[0].woeid);
    }
  };
  const getDataFromLatLong = async (latLong) => {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/search/?query=${latLong}`);
    const data = await res.json();
    if (data[0]) {
      fetchWoeidLocation(data[0].woeid);
    }
  };
  const fetchWoeidLocation = async (woeid) => {
    const res = await fetch(`${BASE_URL}/${woeid}`);
    const data = await res.json();
    setCityWeatherData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (pos) {
    //   console.log(pos.coords.latitude, pos.coords.longitude);
    //   getDataFromLatLong(`${pos.coords.latitude},${pos.coords.longitude}`);
    // });
    getDataFromLocation("new delhi");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        cityWeatherData,
        getDataFromLocation,
        getDataFromLatLong,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherContext;
