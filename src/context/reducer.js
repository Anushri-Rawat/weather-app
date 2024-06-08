const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_CURRENT_LOCATION_WEATHER_DATA":
      return {
        ...state,
        weatherData: action.payload,
      };
    case "SET_CITYNAME":
      return {
        ...state,
        city: action.payload,
      };
    case "SET_THEME":
      return{
        ...state,
        theme:action.payload
      }
    default:
      return { ...state };
  }
};
export default reducer;
