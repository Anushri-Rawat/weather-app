import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { getDataFromLocation } from "../actions/helperFunction";

const initialState = {
  latitude: "",
  longitude: "",
  loading: true,
  weatherData: null,
  city: "dehradun",
};

const WeatherContext = createContext();
export const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WeatherContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContext;
