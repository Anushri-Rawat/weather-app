export const getDataFromLatLong = async (lat, long, dispatch) => {
  dispatch({ type: "START_LOADING" });
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    if (data) {
      dispatch({
        type: "SET_CURRENT_LOCATION_WEATHER_DATA",
        payload: data,
      });
    }
    setTimeout(() => dispatch({ type: "END_LOADING" }), 1500);
  } catch (err) {
    alert(err);
    dispatch({ type: "END_LOADING" });
  }
};
export const getDataFromLocation = async (city, dispatch) => {
  dispatch({ type: "SET_CITYNAME", payload: city });
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    getDataFromLatLong(data.coord.lat, data.coord.lon, dispatch);
  } catch (err) {
    alert(err);
  }
};

export const getCurrentLoactionWeather = (dispatch) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    getDataFromLatLong(pos.coords.latitude, pos.coords.longitude, dispatch);
  });
};
