import React, { useEffect } from "react";
import "../sass/components/ImageSegment.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  uploadAndSegmentImage,
} from "../state/ImageSegmentation/segmentSlice";

const Imagesegment = () => {
  const image = useSelector((state) => state.imageOriginal?.imageUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      dispatch(uploadAndSegmentImage(image));
    }
  }, [image, dispatch]);

  return (
    <div>
      <img src={image || null} alt="" className="Image-Segment" />
    </div>
  );
};

export default Imagesegment;
