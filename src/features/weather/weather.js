import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectWeather, isLoadingWeather, loadWeatherAPI } from './weatherSlice';

const location = { lat: -38.661819, lon: 178.028928 };

navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords);
    location.lat=position.coords.latitude;
    location.lon=position.coords.longitude;
});


const Weather = () => {
    const weatherNow = useSelector(selectWeather);
    const weatherIsLoading = useSelector(isLoadingWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWeatherAPI(location));
    }, [dispatch]);

    if (weatherIsLoading || Object.keys(weatherNow).length === 0) return <div>Loading Weather</div>
    console.log(weatherNow);

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