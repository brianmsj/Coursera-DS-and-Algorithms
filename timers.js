var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("Wait for it");

var interval = setInterval(function() {
  currentTime += waitInterval;
  console.log(`wait ${currentTime/1000} seconds...`);
},waitInterval);

setTimeout(function() {
  clearInterval(interval)
  console.log("done")
},waitTime);
