// for of

const arr=[10,20,30,40,50,60];

for(let num of arr){
    // console.log(num);
}

// for(let num in arr){
//     console.log(num);
// }

const greetings="Hello World!";

for (const greet of greetings) {
    // console.log(greet);
}

// Map

const map=new Map(); // It only takes unique values

map.set('In',"India");
map.set('USA','America');
map.set('FR','France');
map.set('In',"India");

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-',value);
}

const myGame={
    'game1':'spiderman',
    'game2': 'pubg',
    'game3':'bgmi'
}

// for (const game of myGame) { // TypeError: myGame is not iterable
//    console.log(game);
// }

