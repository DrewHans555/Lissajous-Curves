class Curve {

  constructor() {
    this.pathArray = [];
    this.current = createVector();
  }

  drawCurve() {
    this.pathArray.push(this.current);
    drawShapeToScreen(this.pathArray);
    drawPointToScreen(this.current.x, this.current.y);
    this.current = createVector();
  }

  reset() {
    this.pathArray = [];
  }

  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }
}