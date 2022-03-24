import "./App.css";
import Main from "./components/Main";
import { WeatherContextProvider } from "./components/context/WeatherContext";
import { Fragment } from "react";
function App() {
  return (
    <WeatherContextProvider>
      <Main />
    </WeatherContextProvider>
  );
}

export default App;
