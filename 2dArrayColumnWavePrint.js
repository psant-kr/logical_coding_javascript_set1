// i = row
// j = col
function columnwave(grid) {
    let str = "";
    let i = 0; // just for first row length or arr[i].length or arr[0].length
    for (let j = 0; j < grid[i].length; j++) {
        if ((j % 2) == 0) {
        // even col --> up to down
            for (let i = 0; i < grid.length; i++) { // this loop goes from up to down
                str += grid[i][j] + " ";
            }
        } else {
        // odd col down to up
            for (let i = grid.length - 1; i >= 0; i--) { // this loop goes from down to up
                str += grid[i][j] + " ";
            }
        }
    }
    return str;
}
let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];
console.log(columnwave(grid));