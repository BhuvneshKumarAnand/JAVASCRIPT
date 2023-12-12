const coding=['js','cpp','java','rb','py'];

// for (const item of coding) {
//     console.log(item);
//     console.log(coding[item]);// undefined
// }


// for (const item in coding) {
//     // console.log(item);
//     console.log(coding[item]);
// }

// forEach function

// coding.forEach( function(item){
//     console.log(item);
// } );


// coding.forEach( (item)=>{
//     console.log(item);
// } );


// coding.forEach( (item, index, coding)=>{
//     console.log(item, index, coding);
// } );

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

