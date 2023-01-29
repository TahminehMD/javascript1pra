<<<<<<< HEAD
const prompt = require('prompt-sync')()
let num = prompt('please enter a number : ');

let res = 0;

while(num != 0){
    res += num % 10
    num = parseInt(num / 10)
}
console.log(res);


let str = prompt('pleas enter your name : ')
// let str1 = str.split("")
// let result = str1.split("").reverse().join("")
// console.log(result);

// console.log(str[str.length - 1]);
let result = "";
for (let i  = str.length -1; i>=0; i--){
    result += str[i]
}
console.log(result);
=======
// fibonatcci
// 0 1 1 2 3 5 8 ...
let fib = 6

let a = 0
let b = 1
let c = null

for (let i = 3; i <= fib; i++){
  c = a + b
  console.log(c)
  a = b
  b = c
}
>>>>>>> 091eb25c4b47e5f4659cbab3e74cc4c35376c656
