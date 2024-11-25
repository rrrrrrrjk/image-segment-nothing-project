// server.js
import express from "express";
import multer from "multer";
import sharp from "sharp";
import cors from "cors";
import axios from "axios";
import FormData from "form-data";

const app = express();
const upload = multer();

app.use(cors());

const url = "https://predict.ultralytics.com";
//const headers = { "x-api-key": "6b80a06badc0014fa56769630ac9c20a123499920f" };
const headers = { "x-api-key": "b4b855396ff84d51061ad93b3aa1a19c6a877e5ee9" }; //ryw
const data = {
  model: "https://hub.ultralytics.com/models/tMb1oh6heAMVVr8YZAeH", //original
  //model: "https://hub.ultralytics.com/models/LANJV1QBekDh5wGntsli",
  imgsz: 640,
  conf: 0.25,
  iou: 0.45,
};

async function prepare_input(buf) {
  try {
    const img = sharp(buf);
    const md = await img.metadata();
    const [img_width, img_height] = [md.width, md.height];
    const pixels = await img
      .removeAlpha()
      .resize({ width: 640, height: 640, fit: "fill" })
      .raw()
      .toBuffer();

    const red = [],
      green = [],
      blue = [];
    for (let index = 0; index < pixels.length; index += 3) {
      red.push(pixels[index] / 255.0);
      green.push(pixels[index + 1] / 255.0);
      blue.push(pixels[index + 2] / 255.0);
    }

    const input = [...red, ...green, ...blue];
    return [input, img_width, img_height];
  } catch (error) {
    console.error("Error in prepare_input:", error);
    throw error;
  }
}

app.post("/demo", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const formData = new FormData();
    formData.append("file", req.file.buffer, req.file.originalname);

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axios.post(url, formData, {
      headers: {
        ...headers,
        ...formData.getHeaders(),
      },
    });
    const [input, img_width, img_height] = await prepare_input(req.file.buffer);

    response.data.processed_input = input;
    response.data.img_width = img_width;
    response.data.img_height = img_height;

    res.json(response.data);
  } catch (error) {
    console.error("Error in /demo route:", error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
