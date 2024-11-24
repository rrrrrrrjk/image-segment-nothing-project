from ultralytics import YOLO

model = YOLO("latest-flower.pt") 
# model.export(format="onnx")

results = model("./flower.jpg")

for img in results:
    img.show()
    