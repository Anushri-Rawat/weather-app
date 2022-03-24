import { useContext, useState } from "react";
import { MdOutlineClose, MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import classes from "./SideBarMenu.module.css";
import WeatherContext from "../context/WeatherContext";

const SideBarMenu = (props) => {
  const ctx = useContext(WeatherContext);
  const [location, setLocation] = useState("");
  function searchPlaceHandler(e) {
    e.preventDefault();
    if (location.trim() === "" || location.length > 0) {
      ctx.getDataFromLocation(location);
    }
    setLocation("");
  }

  return (
    <div className={classes["sidebar-menu"]}>
      <div className={classes["close-menu"]}>
        <button className={classes["close-btn"]} onClick={props.toggleMenu}>
          <MdOutlineClose />
        </button>
      </div>
      <form>
        <MdSearch className={classes["search-icon"]} />
        <input
          type="text"
          placeholder="search location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          className={classes["submit-btn"]}
          onClick={searchPlaceHandler}
        >
          Search
        </button>
      </form>
      <ul className={classes["result-list"]}>
        <li onClick={() => ctx.getDataFromLocation("Delhi")}>
          Delhi <MdKeyboardArrowRight />
        </li>
        <li onClick={() => ctx.getDataFromLocation("London")}>
          London <MdKeyboardArrowRight />
        </li>
        <li onClick={() => ctx.getDataFromLocation("Barcelona")}>
          Barcelona <MdKeyboardArrowRight />
        </li>
        <li onClick={() => ctx.getDataFromLocation("Long Beach")}>
          Long Beach <MdKeyboardArrowRight />
        </li>
      </ul>
    </div>
  );
};
export default SideBarMenu;
