/*===================================
||
|| Functions and Imports
||
===================================*/

import { addTwoNumbers, myState } from "./B.Imports-Exports.js";

import myFavNumber from "./B.Imports-Exports.js";

console.group("Functions");

//function declaration
// const addTwoNumbers = (timbuktu, num2) => {
//     console.log(timbuktu, num2, timbuktu + num2);
// };

// function trigger/ execution
addTwoNumbers(10, 100);
addTwoNumbers(10, 200);
addTwoNumbers(10, 300);
addTwoNumbers(10, 400);

console.log(myState);
console.log(myFavNumber);

console.groupEnd();
