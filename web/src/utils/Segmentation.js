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

const highlightImg = (arr, imgHeight, imgWidth) => {
    const [arrX, arrY] = arr;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.clearRect(0, 0, imgWidth, imgHeight);
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
    ctx.save();
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
    });
    if (imgHeight < 640) {
        overlayImage.style.margin = "2rem";
    }else {
        overlayImage.style.padding = "2rem";
    }
    overlayImage.width = imgWidth;
    overlayImage.height = imgHeight;
    const imageContainer = document.querySelector(".Image-Segment").parentElement;
    imageContainer.style.position = "relative";
    imageContainer.appendChild(overlayImage);
};

export { segmentImage, highlightImg };