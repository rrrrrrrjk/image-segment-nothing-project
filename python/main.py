from ultralytics import YOLO

model = YOLO("latest-flower.pt") 

results = model.train(data="coco-seg.yaml", epochs=100, imgsz=640, resume=True)