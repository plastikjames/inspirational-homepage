import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWeather, loadWeatherAPI } from "./weatherSlice";
import { useGeolocation } from "../../hooks/useGeolocation";

const Weather = () => {
  const weatherNow = useSelector(selectWeather);
  const currentLocation = useGeolocation();
  const dispatch = useDispatch();

  let wIcon = `http://openweathermap.org/img/wn/03d@2x.png`;
  let wName = "------";
  let wTemp = "--";

  useEffect(() => {
    if (currentLocation !== {}) {
      dispatch(loadWeatherAPI(currentLocation));
    }
  }, [dispatch, currentLocation]);

  if ("weather" in weatherNow) {
    wIcon = `http://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@2x.png`;
    wName = weatherNow.name;
    wTemp = weatherNow.main.temp.toFixed(0);
  }

  return (
    <div
      id="weatherbox"
      className="rounded border border-light glasspane text-white"
    >
      <div className="row align-items-center">
        <div className="col">
          <img id="wicon" src={wIcon} alt="Weather icon"></img>
          {/*<p>{weatherNow.weather[0].description}</p>*/}
        </div>
        <div className="col">
          <h5>{wName}</h5>
        </div>
        <div className="col">
          <h5>{wTemp + "°"}</h5>
        </div>
      </div>
    </div>
  );
};

export default Weather;
