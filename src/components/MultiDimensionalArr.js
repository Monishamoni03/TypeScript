//Multi-dimensional array - use two [][]
// let arr: number[][] = [[1, 2, 3], [3, 2, 1]]
var arr = [[1, 2, 3], [3, 2, 1]];
arr.forEach(function (b) {
    b.forEach(function (b) { return console.log(b); });
});
