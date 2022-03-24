import Sidebar from "./SideBar";
import classes from "./Main.module.css";
import Loading from "./Loading";
import RightSection from "./RightSection";
import { useContext } from "react";
import WeatherContext from "./context/WeatherContext";
const Main = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx.isLoading) {
    return (
      <main>
        <Sidebar />
        <RightSection />
      </main>
    );
  } else {
    return <Loading />;
  }
};
export default Main;
