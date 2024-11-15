from ultralytics import YOLO
import cv2
import numpy as np

# Load the model
model = YOLO('python/yolo11x-seg.pt')

# Load and process an image
image = cv2.imread('/image-segment-nothing-project/python/images/human.png')
results = model(image)

# Extract segmentation masks
masks = results[0].masks.data.cpu().numpy()  # Convert to numpy array


# Process each mask
for i, mask in enumerate(masks):
    # Convert mask to binary (threshold at 0.5)
    binary_mask = (mask > 0.5).astype(np.uint8)  # Binary mask (0 or 1)

    # Scale mask to 0-255 range (required for OpsenCV)
    binary_mask = binary_mask * 255

    # Ensure mask dimensions match the image
    binary_mask = cv2.resize(binary_mask, (image.shape[1], image.shape[0]))

    # Apply the mask to the original image
    object_image = cv2.bitwise_and(image, image, mask=binary_mask)

    # Save the object image
    cv2.imwrite(f'/image-segment-nothing-project/python/output/object_{i}.png', object_image)
