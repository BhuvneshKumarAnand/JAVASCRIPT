const arr=[1,2,3,4];

const initialValue=0;

// const myTotal=arr.reduce(function(acc,currVal){
//     return acc+currVal;
// }, initialValue);


// const myTotal=arr.reduce(function(acc,currVal){
//     console.log(`accumulator :- ${acc}, current value :- ${currVal}`);
//     return acc+currVal;
// }, initialValue);

const myTotal=arr.reduce((acc,currVal)=>acc+currVal,0);

// console.log(myTotal);


const shoppingCart=[
    {
        course:'javascript',
        price:3999
    },
    {
        course:'C++',
        price:4999
    },
    {
        course:'JAVA',
        price:9999
    },
    {
        course:'Ruby',
        price:2999
    },
    
];

const total=shoppingCart.reduce((acc,item)=>{ 
    return acc+item.price
},0);

console.log(total);