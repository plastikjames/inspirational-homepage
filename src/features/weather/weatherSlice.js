import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = "4e46d6c5c0e6aa25c81b4d714b945a7d";

// This was an attempt to use geolocation. Not quite sure what to do

/*const getLocation = () => {
    let location;
    const successCallback = (position) => {
        location = ({ lat: position.coords.latitude, lon: position.coords.longitude })
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    return location;
}*/

export const getCoords = createAsyncThunk(
    'weather/fetchCoords',
    async () => {
        const response = await fetch(
          `https://api.geoapify.com/v1/ipinfo?&apiKey=58891b4a71224aeab75aeef2b7b5808d`
        );
        const json = await response.json();
        const data = {
            lat: json.location.latitude,
            lon: json.location.longitude
        }
        return data;
    }
)

export const loadWeatherAPI = createAsyncThunk(
    'weather/loadWeatherAPI',
    async (location) => {
        const apiString = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`;
        const data = await fetch(apiString);
        const dataJ = await data.json();
        return (dataJ);
    }
)

const initialState = {
    weatherNow: undefined,
    lat: "",
    lon: "",
    isLoadingWeather: false,
    failedToLoadWeather: false
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loadWeatherAPI.pending]: (state, action) => {
            state.isLoadingWeather = true;
            state.failedToLoadWeather = false;
        },
        [loadWeatherAPI.fulfilled]: (state, action) => {
            state.weatherNow = action.payload;
            state.isLoadingWeather = false;
            state.failedToLoadWeather = false;
        },
        [loadWeatherAPI.rejected]: (state, action) => {
            state.isLoadingWeather = false;
            state.failedToLoadWeather = true;
        },
        [getCoords.pending]: (state, action) => {
            state.isLoadingWeather = true;
            state.failedToLoadWeather = false;
        },
        [getCoords.fulfilled]: (state, action) => {
            const { lat, lon } = action.payload
            state.isLoadingWeather = false;
            state.failedToLoadWeather = false;
            state.lat = lat;
            state.lon = lon;
        },
        [getCoords.rejected]: (state, action) => {
            state.failedToLoadWeather = true
            state.isLoadingWeather = false
        }
    }
});

export const selectLon = (state) => state.weather.lon;
export const selectLat = (state) => state.weather.lat;
export const isLoadingWeather = (state) => state.weather.isLoadingWeather;
export const failedToLoadWeather = (state) => state.weather.failedToLoadWeather;
export const selectWeather = (state) => state.weather.weatherNow;
export default weatherSlice.reducer;