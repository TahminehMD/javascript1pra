const prompt = require('prompt-sync')()
// let num1 = parseInt(prompt('enter another number :'))
// let num2 = parseInt(prompt('enter another number :'))
// let num3 = parseInt(prompt('enter another number :'))
// let num4 = parseInt(prompt('enter another number :'))

// if (num1 < num2 || num1 < num3 || num1 < num4){
//     if(num2 < num3 || num2 < num4 ) {
//         if (num3 < num4){
//             console.log(num4);
//         } else {
//             console.log(num3);
//         }
//     } else {
//         console.log(num2);
//     }
// } else {
//     console.log(num1);
// }
let total=1
let fact= parseInt(prompt('enter another number :'))
for(let i=fact; i>=1 ; i--){
    total*=i
}
console.log(total);