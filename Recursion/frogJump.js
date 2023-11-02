/**
 mimimum possible total cost incurred before the frog reaches stone N.
 */

function f(i, n, heights) {
    if (i == n) return 0;
    if (i == n - 1) {
        // we are at the second last index, we can only go to the last index.
        return Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights);
    }
    if (i > n) return Infinity;

    return Math.min(
        Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights),
        Math.abs(heights[i] - heights[i + 2]) + f(i + 2, n, heights)
    );
};
console.log(f(1, 4, [undefined, 10, 30, 40, 20]));// undefined is dummy for making array 1 based index. 