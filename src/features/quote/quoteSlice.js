import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDailyQuote = createAsyncThunk(
    'quote/loadDailyQuote',
    async () => {
        const data = await fetch(
            `https://quotes.rest/qod?language=en`
        );
        const dataJ = await data.json();
        return (dataJ);
    }
)

const initialState = {
    quote: {},
    isLoadingQuote: false,
    failedToLoadQuote: false
};


export const quoteSlice = createSlice({
    name: 'quote',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loadDailyQuote.pending]: (state, action) => {
            state.isLoadingQuote = true;
            state.failedToLoadQuote = false;
        },
        [loadDailyQuote.fulfilled]: (state, action) => {
            state.quote = action.payload.contents.quotes[0];
            state.isLoadingQuote = false;
            state.failedToLoadQuote = false;
        },
        [loadDailyQuote.rejected]: (state, action) => {
            state.isLoadingQuote = false;
            state.failedToLoadQuote = true;
        }
    }
});

export const isLoadingQuote = (state) => state.quote.isLoadingQuote;
export const selectQuote = (state) => state.quote.quote;
export default quoteSlice.reducer;