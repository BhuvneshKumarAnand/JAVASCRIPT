"use strict"; //treat all js code as newer version


// alert(2+1); //we are using nodejs not brower hence it will not work

//code readability should be high

//7 primitive data types

//number
//string
//bigInt
//symbol ==> unique
// boolean ==> true/false 
// null ==> standalone value 
// undefined ==> 


// 1 non-primitive data types
// objects

console.log(typeof null); //object
console.log(typeof undefined); //undefined
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "bharat",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3