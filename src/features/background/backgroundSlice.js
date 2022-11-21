import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let Access_Key = "FPfd2YuKlYWYzYlm4x7zhJOnoL8Ws8pnw4d4lasBZPQ";

export const loadBackgroundImages = createAsyncThunk(
    'background/loadBackgroundImages',
    async(searchTerm) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&orientation=landscape&client_id=${Access_Key}&per_page=10`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    return(result);
  }
)

const initialState = { 
    images: [],
    selectedImage: 0,
    isLoadingImages: false,
    failedToLoadImages: false };

export const backgroundSlice = createSlice({ 
    name: 'background',
    initialState: initialState,
    reducers: {
        changeImg: (state, action) => {
            console.log(action.payload);
            state.selectedImage = action.payload;
        }
    },
    extraReducers: {
        [loadBackgroundImages.pending]: (state, action) => {
            state.isLoadingImages = true;
            state.failedToLoadImages = false;
        },
        [loadBackgroundImages.fulfilled]: (state, action) => {
            state.images = action.payload;
            state.isLoadingImages = false;
            state.failedToLoadImages = false;
        },
        [loadBackgroundImages.rejected]: (state, action) => {
            state.isLoadingImages = false;
            state.failedToLoadImages = true;
        }
    }
});

export const isLoadingImages = (state) => state.background.isLoadingImages;
export const { changeImg } = backgroundSlice.actions;
export const selectImages = (state) => state.background.images;
export const selectImg = (state) => state.background.selectedImage;
export default backgroundSlice.reducer;