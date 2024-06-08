import SideBar from "../SideBar";
import Loading from "../Loading";
import RightSection from "../RightSection";
import { useEffect, useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import classes from "./main.module.css";
import { getCurrentLoactionWeather } from "../../actions/helperFunction";

const Main = () => {
  const {
    state: { loading, theme },
    dispatch,
  } = useContext(WeatherContext);

  useEffect(() => {
    getCurrentLoactionWeather(dispatch);
  }, []);
  return (
    <main
      className={
        theme == "light" ? classes["light-mode"] : classes["dark-mode"]
      }
    >
      <SideBar />
      {loading ? <Loading /> : <RightSection />}
    </main>
  );
};
export default Main;
