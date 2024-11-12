from ultralytics import YOLO

model = YOLO("lastest-flower.pt") 

results = model.train(data="coco-seg.yaml", epochs=100, imgsz=640, resume=True)