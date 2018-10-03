class LissajousTable {

    constructor(width, height) {
        this.angle = 0;
        this.square_side_length = 100;
        this.cols = floor(width / this.square_side_length) - 1;
        this.rows = floor(height / this.square_side_length) - 1;
        this.circle_diameter = this.square_side_length * 0.8;
        this.circle_radius = this.circle_diameter / 2;
        this.curves = this.make2DArrayOfCurve(this.rows, this.cols);
    }

    calculateXCordOffset(index) {
        return this.circle_radius * cos(this.angle * (index + 1) - HALF_PI);
    }

    calculateYCordOffset(index) {
        return this.circle_radius * sin(this.angle * (index + 1) - HALF_PI);
    }

    drawCurves() {
        for (let row_index = 0; row_index < this.rows; row_index++) {
            for (let col_index = 0; col_index < this.cols; col_index++) {
                this.curves[row_index][col_index].drawCurve();
            }
        }
    }

    drawOvals()
    {
        this.drawOvalsInFirstRow()
        this.drawOvalsInFirstColumn();
    }

    drawOvalsInFirstColumn() {
        for (let row_index = 0; row_index < this.rows; row_index++) {
            let circle_centerx = this.square_side_length / 2;
            let circle_centery = this.square_side_length * (row_index + 1.5);
            drawEllipseToScreen(circle_centerx, circle_centery, this.circle_diameter, this.circle_diameter);

            let x_offset = this.calculateXCordOffset(row_index);
            let y_offset = this.calculateYCordOffset(row_index);
            drawPointToScreen(circle_centerx + x_offset, circle_centery + y_offset);
            drawLineToScreen(0, circle_centery + y_offset, width, circle_centery + y_offset);

            for (let col_index = 0; col_index < this.cols; col_index++) {
                this.curves[row_index][col_index].setY(circle_centery + y_offset);
            }
        }
    }

    drawOvalsInFirstRow() {
        for (let col_index = 0; col_index < this.cols; col_index++) {
            let circle_centerx = this.square_side_length * (col_index + 1.5);
            let circle_centery = this.square_side_length / 2;
            drawEllipseToScreen(circle_centerx, circle_centery, this.circle_diameter, this.circle_diameter);

            let x_offset = this.calculateXCordOffset(col_index);
            let y_offset = this.calculateYCordOffset(col_index);
            drawPointToScreen(circle_centerx + x_offset, circle_centery + y_offset);
            drawLineToScreen(circle_centerx + x_offset, 0, circle_centerx + x_offset, height);

            for (let row_index = 0; row_index < this.rows; row_index++) {
                this.curves[row_index][col_index].setX(circle_centerx + x_offset);
            }
        }
    }

    incrementAngle() {
        this.angle -= 0.01;
    }

    make2DArrayOfCurve(rows, cols) {
        var arr = new Array(rows);
        for (let r = 0; r < rows; r++) {
            arr[r] = new Array(cols);
            for (let c = 0; c < cols; c++) {
                arr[r][c] = new Curve();
            }
        }
        return arr;
    }

    resetAngle() {
        this.angle = 0;
    }

    resetCurves() {
        for (let row_index = 0; row_index < this.rows; row_index++) {
            for (let col_index = 0; col_index < this.cols; col_index++) {
                this.curves[row_index][col_index].reset();
            }
        }
    }
}