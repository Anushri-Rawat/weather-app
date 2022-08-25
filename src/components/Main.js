import Sidebar from "./SideBar";
import Loading from "./Loading";
import RightSection from "./RightSection";
import { useEffect, useContext } from "react";
import WeatherContext from "./../context/WeatherContext";
import { getDataFromLatLong } from "./../actions/helperFunction";
import { classes } from "./Main.module.css";
import { getCurrentLoactionWeather } from "./../actions/helperFunction";

const Main = () => {
  const {
    state: { loading },
    dispatch,
  } = useContext(WeatherContext);

  useEffect(() => {
    getCurrentLoactionWeather(dispatch);
  }, []);
  return (
    <main>
      <Sidebar />
      {loading ? <Loading /> : <RightSection />}
    </main>
  );
};
export default Main;
