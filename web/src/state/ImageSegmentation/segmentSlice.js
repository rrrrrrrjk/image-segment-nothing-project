import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: {},
};

const segmentationSlice = createSlice({
    name: 'imageSegmentation',
    initialState,
    reducers: {
        addImage: (state, action) => {
            const { _id, imageUrl } = action.payload;
            state.images[_id] = imageUrl;
        }
    },
});

export const { addImage } = segmentationSlice.actions;

export default segmentationSlice.reducer;