# sentiment-analysis-indonesia-demo
Simple Indonesian sentiment analysis program demonstration on the web. Meant for the model to be used **fully on client side**, so no server and no backend service is required. Model is using **naive bayes** machine learning algorithm. Library used for client side is react.js **without build tools**.

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