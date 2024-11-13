import { createSlice } from "@reduxjs/toolkit";
import defaultImg from "../../assets/images/defaultImg.jpg";

const initialState = {
  image: defaultImg,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    uploadImg: (state, action) => {
      const newImage = action.payload
      state.image = newImage
    },
  },
});

export const { uploadImg } = imageSlice.actions
export default imageSlice.reducer