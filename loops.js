// let i = 0 //start
// while (i < 10){ // condition
//     console.log('hello')
//     i++ // step
// }

// i = 250
// while (i < 10){
//     console.log(i);
//     i++
// }

// i = 250
// do {
//     console.log(i);
//     i++;
// } while(i < 10)

// for(let i = 0; i < 1000; i+=2){
//     // if(i % 2 == 0){
//         console.log(i);
//     // }
// }
// for(let i=1; i<1000;i+=2){
//     console.log(i);
// }

// let res = null
// let i = 1;
// while(i < 1000){
//     res += i
//     i++
// }

// console.log(res);
// for(let i=1; i<1000 ; i++){
//     res=null;
//     res+=i
// }
// console.log(res);

// 4! = 1 * 2 * 3 * 4
// make table with javascript
// for (let i = 0 ; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }


// for In
// for (key in object) {
//     // ...
// }

const cars = {
    brand: "ford", 
    model: "mustang", 
    year: 1969
}

// for (let x in cars){
//     console.log(cars[x]);
// }
// for Of
const numbers = [1,5,9,7,6,3,4,2]
const alph = "abcdefghijklmnopqrstuvwxyz"
for(let x of alph) {
    console.log(x);
}

