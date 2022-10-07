// 1. Array
let arr1: number[] = [15, 3];
arr1[1] = 5

//2. Generic array type - rare case
let arr2: Array<number> = [3, 15];

//Multi-type array : string & number type, etc...
let arr3: (string | number)[] = ["Hello", 5, "Welcome"];

//forEach - to display array elements in sequential
arr1.forEach(a => console.log(a));  //15 5 - o/p