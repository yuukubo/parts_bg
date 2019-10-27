// parts_bg

let [canvasx, canvasy] = [700, 680];
let [canvasFromx, canvasFromy] = [0, 0];
let blockw = canvasx;
let blockh = 10;
let blockspdy = 0;
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
let ismode4 = 0;
let ismode5 = 0;
let mode1x = 0;
let mode1y = 0;
let mode2x = 0;
let mode2y = 0;
let mode3x = 0;
let mode3y = 0;
let mode4x = 0;
let mode4y = 0;
let mode5x = 0;
let mode5y = 0;
let mode4alpha = 0;
let mode4alphaswitch = 0;
let mode4alphaspd1 = 0;
let mode4alphaspd2 = 0;
let mode4flashx = 0;
let mode4flashy = 0;
let mode4flashw = 0;
let mode4flashh = 0;
let mode5angle = 0;
let ballR = 0;
let ballG = 0;
let ballB = 0;
let buttonx = 0;
let buttony = 0;
let buttontextsize = 0;
let buttonontext = "ON ";
let buttonofftext = "OFF";
let button1label = "Mode1";
let button2label = "Mode2";
let button3label = "Mode3";
let button4label = "Mode4";
let button5label = "Mode5";

function setup() {
  createCanvas(canvasx, canvasy);
  blocknum = canvasy / blockh;
  blockspdy = random(1, 6);
  linexnum = canvasx / linexinterval;
  lineynum = canvasy / lineyinterval;
  buttonx = 120;
  buttony = 30;
  buttontextsize = 16;
  mode1x = canvasx * random(1, 13) / 14;
  mode1y = canvasy * 13 / 14;
  mode2x = canvasx * random(1, 13) / 14;
  mode2y = canvasy * 12 / 14;
  mode3x = canvasx * random(1, 13) / 14;
  mode3y = canvasy * 11 / 14;
  mode4x = canvasx * random(1, 13) / 14;
  mode4y = canvasy * 10 / 14;
  mode5x = canvasx * random(1, 13) / 14;
  mode5y = canvasy * 9 / 14;
  angleMode(DEGREES);
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
  if (keyIsDown(52)) {
    ismode4 = 1;
  }
  if (keyIsDown(53)) {
    ismode5 = 1;
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

  if (ismode4) {
    push();
    noStroke();
    fill(ballR, ballG, ballB, mode4alpha);
    circle(mode4flashx, mode4flashy, mode4flashw, mode4flashh);
    if(mode4alphaswitch) {
      mode4alpha += mode4alphaspd1;
    } else {
      mode4alpha -= mode4alphaspd2;
    }
    if(mode4alpha <= 0) {
      mode4alphaswitch = 1;
      mode4flashx = random(canvasx)
      mode4flashy = random(canvasy)
      mode4flashw = random(5,50);
      mode4flashh = random(5,50);
      mode4alphaspd1 = random(1,9);
      mode4alphaspd2 = random(1,9);
      [ballR, ballG, ballB] = [random(0,255), random(0,255), random(0,255)];
    }
    if (100 <= mode4alpha) {
      mode4alphaswitch = 0;
    }
    pop();
  }

  if (ismode5) {
    rotate(mode5angle);
    mode5angle = age % 360;
  }

  push();
  noStroke();
  rectMode(CENTER);
  fill(50, 0, 50);
  rect(mode5x, mode5y, buttonx, buttony);
  fill(0, 50, 100);
  rect(mode4x, mode4y, buttonx, buttony);
  fill(50, 100, 150);
  rect(mode3x, mode3y, buttonx, buttony);
  fill(100, 150, 200);
  rect(mode2x, mode2y, buttonx, buttony);
  fill(150, 200, 250);
  rect(mode1x, mode1y, buttonx, buttony);
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
  if (ismode4) {
    setbutton(mode4x, mode4y, button4label, buttonontext);
  } else {
    setbutton(mode4x, mode4y, button4label, buttonofftext);
  }
  if (ismode5) {
    setbutton(mode5x, mode5y, button5label, buttonontext);
  } else {
    setbutton(mode5x, mode5y, button5label, buttonofftext);
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
  if ((mode4x - buttonx / 2 < mouseX && mouseX < mode4x + buttonx / 2) && (mode4y - buttony / 2 < mouseY && mouseY < mode4y + buttony / 2)) {
    if (ismode4) {
      ismode4 = 0;
    } else {
      ismode4 = 1;
    }
  }
  if ((mode5x - buttonx / 2 < mouseX && mouseX < mode5x + buttonx / 2) && (mode5y - buttony / 2 < mouseY && mouseY < mode5y + buttony / 2)) {
    if (ismode5) {
      ismode5 = 0;
    } else {
      ismode5 = 1;
    }
  }
}

function setbutton(buttonXcenter, buttonYcenter, buttonlabel, buttontext) {
  push();
  textSize(buttontextsize);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(buttonlabel + " : " + buttontext, buttonXcenter, buttonYcenter);
  pop();
}
