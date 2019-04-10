// 迭代器
// import test from "./Iterator_demo/iterator";

//浅拷贝
let obj1 = {a:1,b: {m:1}};
let obj2 = {};
let obj3 = Object.assign(obj2,obj1);
console.log(obj3);

// 深拷贝
// import { clone } from "./deepCopy/deepCopy";

// 最简单的一个深拷贝
// let m = {a:1,b:2};
// let n = {a: m.a, b: m.b};

//json法
let m = {a:1,b:{c:1}};
let n = JSON.parse(JSON.stringify(m));
m.b = 5;
console.log(m,n);
//console.log(clone(true, {a: 1, b: { d: 55, c: 22}} , {b: 1}, {}));
// console.log(({a: 23}).clone1());

// 螺旋数组
// import  spiralArray from "./spiralArray/spiralArray";
// import {sumPerTurn} from "./spiralArray/spiralArray_mo"
// console.log(spiralArray(6));
// console.log(sumPerTurn(5))

// 快速排序(简单快排+原地快排)
// import simpleQuickSort from "./quickSort/divideConquer";
// console.log(simpleQuickSort([29,21,35,28,18,9,22,49,5,98,48]));

// import inPlaceQuickSort from "./quickSort/inPlace";
// let arr = [3,7,8,5,2,1,9,5,4]
// inPlaceQuickSort(arr,0,arr.length-1);
// console.log(arr);


