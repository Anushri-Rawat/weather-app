import classes from "./Meter.module.css";
const Meter = (props) => {
  return (
    <div className={classes["meter"]}>
      <div className={classes.percentage}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className={classes.bar}>
        <div className={classes.progress} style={{ width: `${props.data}%` }} />
      </div>
      <span style={{ marginLeft: `95%` }}>%</span>
    </div>
  );
};
export default Meter;
