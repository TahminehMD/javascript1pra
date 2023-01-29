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