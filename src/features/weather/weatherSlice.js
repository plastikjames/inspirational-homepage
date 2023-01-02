import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = "4e46d6c5c0e6aa25c81b4d714b945a7d";

export const loadWeatherAPI = createAsyncThunk(
    'weather/loadWeatherAPI',
    async (location) => {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`
        );
        const dataJ = await data.json();
        return (dataJ);
    }
)

const initialState = {
    weatherNow: {},
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
            console.log(action);
        },
        [loadWeatherAPI.fulfilled]: (state, action) => {
            state.weatherNow = action.payload;
            state.isLoadingWeather = false;
            state.failedToLoadWeather = false;
            console.log(action);
        },
        [loadWeatherAPI.rejected]: (state, action) => {
            state.isLoadingWeather = false;
            state.failedToLoadWeather = true;
            console.log(action);
        }
    }
});

export const isLoadingWeather = (state) => state.weather.isLoadingWeather;
export const failedToLoadWeather = (state) => state.weather.failedToLoadWeather;
export const selectWeather = (state) => state.weather.weatherNow;
export default weatherSlice.reducer;