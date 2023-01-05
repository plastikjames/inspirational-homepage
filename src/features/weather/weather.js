import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectWeather, isLoadingWeather, loadWeatherAPI, failedToLoadWeather } from './weatherSlice';
import { usePosition } from './usePosition';

const Weather = () => {
    const weatherNow = useSelector(selectWeather);
    const weatherIsLoading = useSelector(isLoadingWeather);
    const weatherFailed = useSelector(failedToLoadWeather);
    const dispatch = useDispatch();
    const { latitude, longitude } = usePosition();

    const location = { lat: latitude, lon: longitude };

    useEffect(() => {
        if (location.latitude) {
            dispatch(loadWeatherAPI(location))
        };
    }, [location, dispatch]);
    
    if (!longitude) return <div>No Coodinates</div>

    if (weatherFailed) return <div>FAIL!</div>

    console.log(weatherNow);
    console.log(weatherIsLoading);
    console.log(location);

    if (weatherIsLoading || Object.keys(weatherNow).length === 0) return <div>Loading Weather...</div>

    return (
        <div id="weatherbox" className="rounded border border-light glasspane text-white">
            <div className="row align-items-center">
                <div className="col">
                    <img id="wicon" src={"http://openweathermap.org/img/w/" + weatherNow.weather[0].icon + ".png"} alt="Weather icon"></img>
                    {/*<p>{weatherNow.weather[0].description}</p>*/}
                </div>
                <div className="col"><h5>{weatherNow.name}</h5></div>
                <div className="col"><h5>{weatherNow.main.temp + "°"}</h5></div>
            </div>
        </div>
    )
}

export default Weather;