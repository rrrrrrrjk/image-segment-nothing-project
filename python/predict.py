from ultralytics import YOLO

model = YOLO("python/yolo11n-seg.pt")

source = "python/images/human.png"

results = model(source)  

for result in results:
    boxes = result.boxes  # Boxes object for bounding box outputs
    masks = result.masks  # Masks object for segmentation masks outputs
    keypoints = result.keypoints  # Keypoints object for pose outputs
    probs = result.probs  # Probs object for classification outputs
    obb = result.obb  # Oriented boxes object for OBB outputs
    result.show()  # display to screen
    result.save(filename="/image-segment-nothing-project/python/output/result.jpg")  # save to disk