// parts_bg

let [canvasx, canvasy] = [720, 690];
let [canvasFromx, canvasFromy] = [0, 0];
let blockw = canvasx;
let blockh = 10;
let blockspdy = 3;
let blockspdx = blockw;
let blockx1 = 0;
let blocky1 = 0;
let blockx2 = 0;
let blocky2 = -1 * canvasy;
let blocknum = 0;
let linex1 = 0;
let liney1 = 0;

function setup() {
  createCanvas(canvasx, canvasy);
  blocknum = canvasy / blockh;
}

function draw() {
  background(0);

  push();
  noStroke();
  for (let i = 0; i < blocknum; i++) {
    fill(i * 2);
    rect(blockx1, blocky1 + i * blockh, blockw, blockh);  
  }
  blocky1 += blockspdy;
  if (canvasy <= blocky1 + blockh) { blocky1 = canvasFromy - canvasy }

  for (let i = 0; i < blocknum; i++) {
    fill(blocknum * 2 - i * 2);
    rect(blockx2, blocky2 + i * blockh, blockw, blockh);  
  }
  blocky2 += blockspdy;
  if (canvasy <= blocky2 + blockh) { blocky2 = canvasFromy - canvasy }
  pop();

  push();
  stroke(255);
  for (let i = 0; i < blocknum; i++) {
    line(linex1, liney1 + i * blockh, blockw, liney1 + i * blockh);  
  }
  pop();
}
