// i and j are starting point, m and n are size of matrix.
function f(i, j, m, n) {
    if (i == m - 1 && j == n - 1) return 1;
    if (i >= m || j >= n) return 0;
    return f(i, j + 1, m, n) + f(i + 1, j, m, n);
};
console.log(f(0, 0, 3, 3));