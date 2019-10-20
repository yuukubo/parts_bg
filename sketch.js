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
let mode1x = 0;
let mode1y = 0;
let mode2x = 0;
let mode2y = 0;
let mode3x = 0;
let mode3y = 0;
let buttonx = 0;
let buttony = 0;
let buttontextsize = 0;
let buttonontext = "ON ";
let buttonofftext = "OFF";
let button1label = "Mode1";
let button2label = "Mode2";
let button3label = "Mode3";

function setup() {
  createCanvas(canvasx, canvasy);
  blocknum = canvasy / blockh;
  linexnum = canvasx / linexinterval;
  lineynum = canvasy / lineyinterval;
  buttonx = 120;
  buttony = 30;
  buttontextsize = 16;
  mode1x = canvasx * random(1, 13) / 14;
  mode1y = canvasy * 11 / 14;
  mode2x = canvasx * random(1, 13) / 14;
  mode2y = canvasy * 12 / 14;
  mode3x = canvasx * random(1, 13) / 14;
  mode3y = canvasy * 13 / 14;
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
  //  noStroke();
  stroke(255);
  rectMode(CENTER);
  fill(50, 100, 150);
  rect(mode1x, mode1y, buttonx, buttony);
  fill(100, 150, 200);
  rect(mode2x, mode2y, buttonx, buttony);
  fill(150, 200, 250);
  rect(mode3x, mode3y, buttonx, buttony);
  pop();

  if (ismode1) {
    setbutton(mode1x, mode1y, button1label, buttonontext);
  } else {
    setbutton(mode1x, mode1y, button1label, buttonofftext);
  }
  if (ismode2) {
    setbutton(mode2x, mode2y, button2label, buttonontext);
  } else {
    setbutton(mode2x, mode2y, button2label, buttonofftext);
  }
  if (ismode3) {
    setbutton(mode3x, mode3y, button3label, buttonontext);
  } else {
    setbutton(mode3x, mode3y, button3label, buttonofftext);
  }

  push();
  noStroke();
  fill(255, 255, 0)
  circle(mouseX, mouseY, 4);
  pop();
}

function mouseClicked() {
  if ((mode1x - buttonx / 2 < mouseX && mouseX < mode1x + buttonx / 2) && (mode1y - buttony / 2 < mouseY && mouseY < mode1y + buttony / 2)) {
    if (ismode1) {
      ismode1 = 0;
    } else {
      ismode1 = 1;
    }
  }
  if ((mode2x - buttonx / 2 < mouseX && mouseX < mode2x + buttonx / 2) && (mode2y - buttony / 2 < mouseY && mouseY < mode2y + buttony / 2)) {
    if (ismode2) {
      ismode2 = 0;
    } else {
      ismode2 = 1;
    }
  }
  if ((mode3x - buttonx / 2 < mouseX && mouseX < mode3x + buttonx / 2) && (mode3y - buttony / 2 < mouseY && mouseY < mode3y + buttony / 2)) {
    if (ismode3) {
      ismode3 = 0;
    } else {
      ismode3 = 1;
    }
  }
}

function setbutton(buttonXcenter, buttonYcenter, buttonlabel, buttontext) {
  push();
  textSize(buttontextsize);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  stroke(255);
  fill(10);
  text(buttonlabel + " : " + buttontext, buttonXcenter, buttonYcenter);
  pop();
}

