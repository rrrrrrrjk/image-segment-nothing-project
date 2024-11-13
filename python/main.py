from ultralytics import YOLO

model = YOLO("python/latest-flower.pt") 

results = model.train(data="python/coco-seg.yaml", epochs=100, imgsz=640, resume=True)