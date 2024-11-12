from ultralytics import YOLO, checks, hub
if __name__ == '__main__':
    checks()

    hub.login('b4b855396ff84d51061ad93b3aa1a19c6a877e5ee9')

    model = YOLO('https://hub.ultralytics.com/models/hKAGsbSiX8PrMz0vCO8c')
    results = model.train()