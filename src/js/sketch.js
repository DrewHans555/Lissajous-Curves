let lissajousTable;

function cycleHasCompleted() {
  return lissajousTable.angle < -TWO_PI;
}

function drawLissajousTable() {
  lissajousTable.drawOvals();
  lissajousTable.drawCurves();
}

function incrementLissajousAngle() {
  lissajousTable.incrementAngle();
}

function resetLissajousTable() {
  lissajousTable.resetCurves();
  lissajousTable.resetAngle();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lissajousTable = new LissajousTable(width, height);
}

function draw() {
  setBackgroundToBlack();
  drawLissajousTable();
  incrementLissajousAngle();
  if (cycleHasCompleted()) {
    resetLissajousTable();
  }
}