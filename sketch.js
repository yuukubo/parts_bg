// parts_bg

let [canvasx, canvasy] = [700, 680];
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
let linexfr = 0;
let lineyfr = 0;
let linexto = canvasx;
let lineyto = canvasy;
let linexinterval = 20;
let lineyinterval = 20;
let linexnum = 0;
let lineynum = 0;
let age = 0;
let isswing = 0;
let swingtimer = 0;
let ismode1 = 0;
let ismode2 = 0;
let ismode3 = 0;
let mode1x = canvasx * 1 / 10;
let mode1y = canvasy * 9 / 10;
let mode2x = canvasx * 4 / 10;
let mode2y = canvasy * 9 / 10;
let mode3x = canvasx * 7 / 10;
let mode3y = canvasy * 9 / 10;

function setup() {
  createCanvas(canvasx, canvasy);
  blocknum = canvasy / blockh;
  linexnum = canvasx / linexinterval;
  lineynum = canvasy / lineyinterval;
}

function draw() {
  background(0);
  age++;

  if (keyIsDown(49)) {
    ismode1 = 1;
  }
  if (keyIsDown(50)) {
    ismode2 = 1;
  }
  if (keyIsDown(51)) {
    ismode3 = 1;
  }

  if (ismode1) {
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
  }

  if (ismode3) {
    if (age % 600 === 0) {
      isswing = 1;
    }
    if (isswing) {
      swingtimer++;
      if (0 < swingtimer && swingtimer <= 20) {
        linexfr++;
        linexto++;
      }
      if (20 < swingtimer && swingtimer <= 40) {
        linexfr -= 2;
        linexto -= 2;
      }
      if (40 < swingtimer && swingtimer <= 60) {
        linexfr++;
        linexto++;
      }
      if (60 < swingtimer) {
        swingtimer = 0;
        isswing = 0;
      }
    }
  }

  if (ismode2) {
    push();
    stroke(255, 100);
    for (let i = 0; i < lineynum; i++) {
      line(linexfr, lineyfr + i * lineyinterval, linexto, lineyfr + i * lineyinterval);
    }
    for (let i = 0; i < linexnum; i++) {
      line(linexfr + i * linexinterval, lineyfr, linexfr + i * linexinterval, lineyto);
    }
    pop();
  }

  push();
  noStroke();
  rectMode(CENTER);
  fill(50, 100, 150);
  rect(mode1x, mode1y - 4, 90, 30);
  fill(100, 150, 200);
  rect(mode2x, mode2y - 4, 90, 30);
  fill(150, 200, 250);
  rect(mode3x, mode3y - 4, 90, 30);
  pop();

  push();
  textSize(16);
  textFont("Comic Sans MS");
  textAlign(CENTER);
  fill(10);
  if (ismode1) {
    text("mode1 : on ", mode1x, mode1y);
  } else {
    text("mode1 : off", mode1x, mode1y);
  }
  if (ismode2) {
    text("mode2 : on ", mode2x, mode2y);
  } else {
    text("mode2 : off", mode2x, mode2y);
  }
  if (ismode3) {
    text("mode3 : on ", mode3x, mode3y);
  } else {
    text("mode3 : off", mode3x, mode3y);
  }
  pop();

}

function mouseClicked() {
  if ((mode1x - 45 < mouseX && mouseX < mode1x + 45) && (mode1y - 19 < mouseY && mouseY < mode1y + 15)) {
    if (ismode1) {
      ismode1 = 0;
    } else {
      ismode1 = 1;
    }
  }
  if ((mode2x - 45 < mouseX && mouseX < mode2x + 45) && (mode2y - 19 < mouseY && mouseY < mode2y + 15)) {
    if (ismode2) {
      ismode2 = 0;
    } else {
      ismode2 = 1;
    }
  }
  if ((mode3x - 45 < mouseX && mouseX < mode3x + 45) && (mode3y - 19 < mouseY && mouseY < mode3y + 15)) {
    if (ismode3) {
      ismode3 = 0;
    } else {
      ismode3 = 1;
    }
  }
}
