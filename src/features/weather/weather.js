import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectWeather, isLoadingWeather, loadWeatherAPI } from './weatherSlice';

const location = {lat: -38.661819, lon: 178.028928};

const Weather = () => {
    const weatherNow = useSelector(selectWeather);
    const weatherIsLoading = useSelector(isLoadingWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWeatherAPI(location));
      }, [dispatch]);

    if (weatherIsLoading || Object.keys(weatherNow).length === 0) return <div>Loading Weather</div>

    return (
        <div id="weatherbox" className="rounded">
            <div>
                <img id="wicon" src={"http://openweathermap.org/img/w/" + weatherNow.weather[0].icon + ".png"} alt="Weather icon"></img>
            </div>
            <div>
                <h2>{weatherNow.main.temp+"°"}</h2>
                <p>{weatherNow.weather[0].description}</p>
            </div>
        </div>
    )
}

export default Weather;