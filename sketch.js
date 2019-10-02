// parts_bg

let [canvasx, canvasy] = [720, 690];
let [canvasFromx, canvasFromy] = [0, 0];
let blockw = canvasx;
let blockh = 10;
let blockspdy = 1;
let blockspdx = blockw;
let blockx = 0;
let blocky = 0;

function setup() {
  createCanvas(canvasx, canvasy);
}

function draw() {
  background(0);
  fill(100);
  rect(blockx, blocky, blockw, blockh);
  blocky += blockspdy;

  if (canvasy <= blocky + blockh) { blocky = canvasFromy }
}
