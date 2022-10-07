//Multi-dimensional array - use two [][]
// let arr: number[][] = [[1, 2, 3], [3, 2, 1]]

let arr: (number | boolean)[][] = [[1, 2, 3], [3, 2, 1]];
arr.forEach(b => {
    b.forEach(b => console.log(b));
});