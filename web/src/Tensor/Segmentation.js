const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node');

const handler = tfn.io.fileSystem('./model.json');
const model = await tf.loadLayersModel(handler);

await model.save('localstorage://model');

console.log("This file runs on the server side");