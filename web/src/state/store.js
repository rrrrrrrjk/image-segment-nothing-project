import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './ImageSegmentation/imageSlice';
import segmentationReducer from './ImageSegmentation/segmentSlice';

export const store = configureStore({
    reducer: {
        imageOriginal: imageReducer,
        imageSegmentation: segmentationReducer,
    },
});