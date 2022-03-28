import Main from "./components/Main";
import { WeatherContextProvider } from "./context/WeatherContext";
function App() {
  return (
    <WeatherContextProvider>
      <Main />
    </WeatherContextProvider>
  );
}

export default App;
