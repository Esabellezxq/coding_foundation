// import test from "./Iterator_demo/iterator";
import { clone } from "./deepCopy/deepCopy";
import  spiralArray from "./spiralArray/spiralArray";
import {sumPerTurn} from "./spiralArray/spiralArray_mo"
// test();
//console.log(clone(true, {a: 1, b: { d: 55, c: 22}} , {b: 1}, {}));
// console.log(({a: 23}).clone1());
console.log(spiralArray(5));

console.log(sumPerTurn(5))