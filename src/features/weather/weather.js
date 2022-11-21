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
      }, []);

    console.log(weatherNow);

    return (
        <div id="weatherbox">
            <h2>This is for the weather</h2>
        </div>
    )
}

export default Weather;