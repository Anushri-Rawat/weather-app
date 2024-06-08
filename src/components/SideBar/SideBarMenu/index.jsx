import { useContext, useState, useRef } from "react";
import { MdOutlineClose, MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import classes from "./sideBarMenu.module.css";
import { getDataFromLocation } from "../../../actions/helperFunction";
import WeatherContext from "../../../context/WeatherContext";

const SideBarMenu = ({ toggleMenu }) => {
  const { state, dispatch } = useContext(WeatherContext);
  const loactionRef = useRef();

  function searchPlaceHandler(e) {
    e.preventDefault();
    const location = loactionRef.current.value;
    if (location.trim() === "" || location.length > 0) {
      getDataFromLocation(location, dispatch);
    }
    loactionRef.current.value = "";
    toggleMenu();
  }

  return (
    <div className={classes["sidebar-menu"]}>
      <div className={classes["close-menu"]}>
        <button className={classes["close-btn"]} onClick={toggleMenu}>
          <MdOutlineClose />
        </button>
      </div>
      <form>
        <MdSearch className={classes["search-icon"]} />
        <input type="text" placeholder="search location" ref={loactionRef} />
        <button
          type="submit"
          className={classes["submit-btn"]}
          onClick={searchPlaceHandler}
        >
          Search
        </button>
      </form>
      <ul className={classes["result-list"]}>
        <li
          onClick={() => {
            getDataFromLocation("Delhi", dispatch);
            toggleMenu();
          }}
        >
          Delhi <MdKeyboardArrowRight />
        </li>
        <li
          onClick={() => {
            getDataFromLocation("London", dispatch);
            toggleMenu();
          }}
        >
          London <MdKeyboardArrowRight />
        </li>
        <li
          onClick={() => {
            getDataFromLocation("Barcelona", dispatch);
            toggleMenu();
          }}
        >
          Barcelona <MdKeyboardArrowRight />
        </li>
        <li
          onClick={() => {
            getDataFromLocation("Long Beach", dispatch);
            toggleMenu();
          }}
        >
          Long Beach <MdKeyboardArrowRight />
        </li>
      </ul>
    </div>
  );
};
export default SideBarMenu;
