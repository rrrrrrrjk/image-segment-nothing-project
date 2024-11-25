import { createSlice } from "@reduxjs/toolkit";
import { add } from "@tensorflow/tfjs";
import axios from "axios";
import { segmentImage, highlightImg } from "../../utils/segmentation";

const segmentationSlice = createSlice({
    name: "imageSegmentation",
    initialState: {
        images: [],
        imageNames: [],
        imageBox: [],
    },
    reducers: {
        addImage: (state, action) => {
            state.images.push(action.payload);
        },
        addImageName: (state, action) => {
            state.imageNames.push(action.payload);
        },
        addImageBox: (state, action) => {
            state.imageBox.push(action.payload);
        },
        clearState: (state) => {
            state.images = [];
            state.imageNames = [];
            state.imageBox = [];
        }
    },
});

export const { addImage, addImageName, addImageBox, clearState } = segmentationSlice.actions;

export const uploadAndSegmentImage = (image) => async (dispatch) => {
    try {
        const response = await fetch(image);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append("image", blob, "image.jpg");

        const res = await axios.post("http://localhost:5000/demo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        res.data.images[0].results.forEach(async (data, index) => {
            const segX = data.segments.x;
            const segY = data.segments.y;
            const { shape } = res.data.images[0];

            console.log("Response:", data);
            let currentImage = await segmentImage(
                [segX, segY],
                shape[0],
                shape[1],
                image
            );
            highlightImg([segX, segY], shape[0], shape[1], image.width, image.height);
            dispatch(addImage(currentImage));
            dispatch(addImageName(data.name));
            dispatch(addImageBox(data.box));
        });
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};

export default segmentationSlice.reducer;
