// import test from "./Iterator_demo/iterator";
// test();

// import { clone } from "./deepCopy/deepCopy";
//console.log(clone(true, {a: 1, b: { d: 55, c: 22}} , {b: 1}, {}));
// console.log(({a: 23}).clone1());

// import  spiralArray from "./spiralArray/spiralArray";
// console.log(spiralArray(6));

// import simpleQuickSort from "./quickSort/divideConquer";
// console.log(simpleQuickSort([29,21,35,28,18,9,22,49,5,98,48]));

import inPlaceQuickSort from "./quickSort/inPlace";
let arr = [3,7,8,5,2,1,9,5,4]
inPlaceQuickSort(arr,0,arr.length-1);
console.log(arr);
