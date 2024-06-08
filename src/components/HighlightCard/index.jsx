import classes from "./highLightCard.module.css";
import { MdNearMe } from "react-icons/md";
import Meter from "../Meter/index.jsx";

const HighlightCard = (props) => {
  return (
    <div className={classes["highlight-card"]}>
      <div className={classes["highlight-title"]}>{props.title}</div>
      <h2 className={classes["measurement"]}>
        {props.value}
        <small>{props.unit}</small>
      </h2>
      {props.wind_direction && (
        <div className={classes["wind-direction"]}>
          <button
            style={{ transform: `rotate(${props.wind_direction - 45}deg)` }}
          >
            <MdNearMe />
          </button>
          {props.additional}
        </div>
      )}
      {props.meter && (
        <div>
          <Meter data={props.value} />
        </div>
      )}
    </div>
  );
};
export default HighlightCard;
