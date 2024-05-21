/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

/*---------------------------
| DataTypes: Numbers
---------------------------*/

console.group("DataTypes: Numbers");

const myNum1 = 234;
const myNum2 = 12;

console.log(myNum1 + myNum2);

console.groupEnd();

/*---------------------------
| DataTypes: Strings
---------------------------*/
console.group("DataTypes: Strings");

const myStr1 = "I went to the ";
const myStr2 = "park. :)";

console.log(myStr1 + myStr2);

console.groupEnd();

/*---------------------------
| DataTypes: Template Strings
---------------------------*/
console.group("DataTypes: Template Strings");

const myTempStr = `
I can write

multiline

stuff here.

${myNum1}

`;

console.log(myTempStr);

console.groupEnd();
