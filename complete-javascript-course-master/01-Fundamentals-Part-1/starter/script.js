// let js = "amazing";
// if (js === 'amazing') {
//   alert('JS is Fun');
// }

// //When we are in browser console This will run 89+56
// 89 + 56; //This will not run in browser console when we open the code in live server
// console.log(89 + 57); // This will work fine, as now we are not in console itself we are in the script file, where we have to mention them that we need this value in console.



// let a = 67;
// //a : variable
// //67: value

// console.log(a);

// //Naming variables

// //1. Camel Case
// let camelCase;

// //2. Cant start with numbers
// // let 3years;

// //3. Only we can use numbers, letter, underscore and $ 
// let nidhi1;
// let nidhi_jagga;
// let nidhi$;

// //4. cant use reserved JS keywords
// //eg new, function

// //5. We should not start with upperCase.

// //6.Should be descriptive.

/*

let javaScriptIsFun = true;
console.log(javaScriptIsFun);//true

console.log(typeof true);//boolean
console.log(typeof javaScriptIsFun);//boolean
console.log(typeof "string");//string
console.log(typeof 23);//number

javaScriptIsFun = "YES!";

console.log(typeof javaScriptIsFun);//string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2023;
console.log(typeof year); //number

//Bug in JS (typeof)
console.log(typeof null);//Object which is not true. It should return null.

*/


/*
let age = 30;
age = 31;

const birthYear = 1998;
//birthyear = 1990; //Error

// const job; //Error

var a;
var a = 12;

var b;
b = 20;
var b = 45;

firstName = "Nidhi";
lastName = "Jagga";
console.log(firstName + " " + lastName);

*/


/*

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/



////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
