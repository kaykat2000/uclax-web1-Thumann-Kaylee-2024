/*===================================
||
|| Variables
||
===================================*/
console.group("Variables");
/*
a variable is a reference to a value, so it can be used over and over or be used later on
*/

//let can be changed
let favColor = "blue";

console.log(favColor);
favColor = "red";
console.log(favColor);

//const cannot be changed
const firstName = "Kaylee";
console.log(firstName);
//const firstName = "David";
//console.log(firstName);

console.groupEnd();
