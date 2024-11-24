import { createSlice } from "@reduxjs/toolkit";
import { add } from "@tensorflow/tfjs";
import axios from "axios";


const segmentImage = (arr, imgHeight, imgWidth, image) => {
    return new Promise((resolve, reject) => {
        const arrX = arr[0];
        const arrY = arr[1];
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const imgElement = new Image();

        imgElement.onload = () => {
            canvas.width = imgWidth;
            canvas.height = imgHeight;
            ctx.clearRect(0, 0, imgWidth, imgHeight);
            ctx.beginPath();
            ctx.moveTo(Math.round(arrX[0]), Math.round(arrY[0]));
            for (let i = 1; i < arrX.length; i++) {
                const x = Math.round(arrX[i]);
                const y = Math.round(arrY[i]);
                ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.save();
            ctx.clip();
            ctx.drawImage(imgElement, 0, 0, imgWidth, imgHeight);
            ctx.restore();
            const clippedImageSrc = canvas.toDataURL();
            resolve(clippedImageSrc);
        };

        imgElement.onerror = (error) => {
            reject(error);
        };

        imgElement.src = image;
    });
};

const highlightImg = (arr, imgHeight, imgWidth, index) => {
    const [arrX, arrY] = arr;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.beginPath();
    ctx.moveTo(Math.round(arrX[0]), Math.round(arrY[0]));
    for (let i = 1; i < arrX.length; i++) {
        ctx.lineTo(Math.round(arrX[i]), Math.round(arrY[i]));
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
    const overlayImage = new Image();
    overlayImage.src = canvas.toDataURL();
    overlayImage.id = "predictedImage";
    overlayImage.className = "predicted-image";
    Object.assign(overlayImage.style, {
        position: "absolute",
        top: "0",
        left: "0",
        pointerEvents: "none",
        zIndex: "100",
        padding: "2rem",
    });
    overlayImage.width = imgWidth;
    overlayImage.height = imgHeight;
    const imageContainer = document.querySelector(".Image-Segment").parentElement;
    imageContainer.style.position = "relative";
    imageContainer.appendChild(overlayImage);
};

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
            highlightImg([segX, segY], shape[0], shape[1], index);
            dispatch(addImage(currentImage));
            dispatch(addImageName(data.name));
            dispatch(addImageBox(data.box));
        });
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};

export default segmentationSlice.reducer;
