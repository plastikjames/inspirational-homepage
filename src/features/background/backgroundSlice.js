import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    images: [{urls: {regular: ""}}],
    selectedImage: 0 };

export const backgroundSlice = createSlice({ 
    name: 'background',
    initialState: initialState,
    reducers: {
        changeImg: (state, action) => {
            console.log(action.payload);
            state.selectedImage = action.payload;
        }
    }
});

export const { changeImg } = backgroundSlice.actions;
export const selectImg = (state) => state.background.selectedImage;
export default backgroundSlice.reducer;