// Stack (Primitive datatypes) and Heap (Non-primitive datatypes)

// Stack gives the copy of original value
// Heap gives the reference of original value

let myname="Bhuvnesh Kumar Anand";

let anothername=myname;
anothername="Bharat Anand"

console.log(anothername);
console.log(myname);


// Heap storage in objects

//1st example

/*
let userOne={
    email: "abc@gmail.com",
    upi: "abc@ybl"
}
let userTwo=userOne;

console.log(userOne.email);
console.log(userTwo.email);
*/

//2nd example

let userOne={
    email: "abc@gmail.com",
    upi: "abc@ybl"
}
let userTwo=userOne;

userTwo.email="jatin@bagla.com"

console.log(userOne.email);
console.log(userTwo.email);