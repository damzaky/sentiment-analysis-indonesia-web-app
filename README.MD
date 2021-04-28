# sentiment-analysis-indonesia-demo
Simple Indonesian sentiment analysis **client side machine learning inference** demonstration on the web. Meant for the model to be used **fully on client side**, so no server and no backend service is required. Model is using **naive bayes** machine learning algorithm. Library used for client side is react.js **without build tools**.

## How it works
The model is trainned separately using SmSA dataset by running the `trainer.js`. Once training is done, the model is saved in JSON format. The client side then implements the machine learning library (bayes in this case) and asynchronously download the model to be used. Once the JSON model is fetched, the model can be run on client.

## Dependencies
- node
- browserify

## Installing
`npm install -g browserify`

`npm install`

## Building
### Train the model
`node trainer.js`

### Bundling package for browser
`browserify module_exporter.js --standalone browserifyBundle > ./bundle.js`

## Running
Open index.html file on your browser

## Tech stack
- vanilla react.js
- browserify
- bayes (naive bayes library for javascript)

## Dataset used
- SmSA