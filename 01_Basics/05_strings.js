// Welcome to strings in JS

console.log("Bhuvnesh " + "Anand");  //string concantination

//Using of Backticks in strings (``) in modern JS

const fName="Bhuvnesh "
const lName="Anand"

console.log(`My First name is ${fName} and my last name is ${lName}`);

const gameName=new String('Battle-ground-pubg');

console.log(typeof(gameName)); //object which stores string

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('g'));


//substrings in string

const newString=gameName.substring(0,5);
console.log(newString);

//slice in string

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

// use of trim in string

const sampleString="   bhuvnesh@gmail.com    "; //it has some unwanted spaces at the starting and the ending
console.log(sampleString);
console.log(sampleString.trim()); //removes the unwanted spaces

// use of replace in strings

const url="https://bhuvnesh.com/bhuvnesh%20anand"
console.log(url);
console.log(url.replace('%20', '-'));

// use of includes in Strings

console.log(url.includes('bhuvnesh'));// answers in boolean
console.log(url.includes('kumar'));

//use of split in strings

console.log(gameName.split('-'));