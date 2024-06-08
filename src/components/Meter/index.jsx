import { useContext } from "react";
import classes from "./meter.module.css";
import WeatherContext from "../../context/WeatherContext";
const Meter = (props) => {
  const {
    state: { theme },
  } = useContext(WeatherContext);
  return (
    <div className={classes.meter}>
      <div className={classes.percentage}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div
        className={classes.bar}
        style={{ background: theme === "light" ? "#fff" : "#e7e7eb" }}
      >
        <div className={classes.progress} style={{ width: `${props.data}%` }} />
      </div>
      <span style={{ marginLeft: `95%` }}>%</span>
    </div>
  );
};
export default Meter;
