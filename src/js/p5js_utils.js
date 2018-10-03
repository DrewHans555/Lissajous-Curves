/*
    p5js reference: https://p5js.org/reference/

    Constants Used:
    - HALF_PI, half the ratio of the circumference of a circle to its diameter
    - TWO_PI, twice the ratio of the circumference of a circle to its diameter

    Functions Used:
    - setup() called once when the program starts
    - draw() called directly after setup(), continuously executes the lines of 
        code contained inside its block

    - background() sets the background color used for the p5.js canvas
    - createCanvas() creates a canvas element in the document, should be called 
        only once at the start of setup
    - elipse() draws an ellipse to the screen
    - line() draws a line (a direct path between two points) to the screen
    - noFill() disables filling geometry
    - point() draws a point, a coordinate in space at the dimension of one pixel
    - stoke() sets the color used to draw lines & borders around shapes
    - strokeWeight() sets the width of the stroke used for lines, points, 
        & border around shapes
*/

function drawEllipseToScreen(x_cord, y_cord, ellipse_width, ellipse_height) {
    strokeWeight(1);
    stroke(255);
    ellipse(x_cord, y_cord, ellipse_width, ellipse_height);
}

function drawLineToScreen(x_cord1, y_cord1, x_cord2, y_cord2) {
    stroke(255, 150);
    strokeWeight(1);
    line(x_cord1, y_cord1, x_cord2, y_cord2);
}

function drawPointToScreen(x_cord, y_cord) {
    strokeWeight(8);
    stroke(255);
    point(x_cord, y_cord);
}

function drawShapeToScreen(pathArray)
{
    noFill();
    stroke(255);
    strokeWeight(1);
    beginShape();
    for (let v of pathArray) {
      vertex(v.x, v.y);
    }
    endShape();
}

function setBackgroundToBlack() {
    background(0);
}
