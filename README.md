# Segment Nothing Project

This project is a web-based Deep-Learning integration that provides advanced image segmentation capabilities. Users can upload images, process them using AI-powered segmentation, visualize segmented regions, and download the results.

## Features
- **Image Segmentation**: Leverages AI models to segment uploaded images into specific regions.
- **Preview and Highlight**: Allows users to preview and highlight segmented areas directly in the browser.
- **Download Functionality**: Provides the option to download segmented images in PNG format.
- **Modern Web Technologies**: Built with React, Redux, Node.js, and Tailwind CSS for a seamless and responsive user experience.

## Tech Stack
- **Frontend**:
  - React
  - Tailwind CSS
  - sass
  - React-Redux for state management
- **Backend**:
  - Node.js
  - Express.js
  - Multer for file uploads
  - Sharp for image processing
  - Axios for API calls
- **Deep learning Model Integration**:
  - Ultralytics API for image segmentation

## Installation and Setup
```
$ git clone https://github.com/rrrrrrrjk/image-segment-nothing-project.git
```

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn
- A compatible browser (e.g., Chrome, Firefox)
- Docker

### Project Setup
------
```
$ cd image-segment-nothing-project
$ docker compose up -d
```
### Terminate
------
```
$ docker compose down
```


