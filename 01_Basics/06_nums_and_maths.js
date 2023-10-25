const score=400;
console.log(score);

// create an object which is number

const balance=new Number(100);
console.log(balance); //object of number

// change number to string
// Use of toString in JS

console.log(balance.toString());
console.log(typeof balance); //object of string
console.log(balance.toString().length);

//use of toFixed in JS

const num1 =25.455463
console.log(num1.toFixed(2)); // use of find the precise value 

// use of twoPrecision in JS

console.log(num1.toPrecision(3));

// use of twoLocalString() in js

const hundred=100000000;
console.log(hundred.toLocaleString()); // US standard
console.log(hundred.toLocaleString('en-IN')); // Indian standard

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++


console.log(Math); //object
console.log(Math.abs(-4)); //absolue value of -4 is 4
console.log(Math.round(4.6)); //round off value of 4.6 is 5
console.log(Math.ceil(4.2)); //top or ceiling value of 4.2 is 5
console.log(Math.floor(4.9)); //bottom or floor value of 4.9 is 4

// min or max values 

console.log(Math.min(4,2,3,8));
console.log(Math.max(4,2,3,8));

console.log(Math.random()); // always ranges between 0 and 1

console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));



//create a dice in Ludo with the range from 1 to 6

const min=1;
const max=6;

// Formula---> ((Math.random() * (max-min+1))+min)

console.log(Math.floor(((Math.random() * (max-min+1))+min)));