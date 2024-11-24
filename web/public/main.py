from ultralytics import YOLO

model = YOLO("latest-flower.pt") 
model.export(format="onnx")