import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    images: [{urls: {regular: ""}}],
    selectedImage: 0 };

export const backgroundSlice = createSlice({ 
    name: 'background',
    initialState: initialState,
    reducers: {
        changeImg: (state, action) => {
            state.selectedImage = action.payload.selectedImage;
        }
    }
});

export const { changeImg } = backgroundSlice.actions;
export default backgroundSlice.reducer;
export const selectImages = (state) = state.images;