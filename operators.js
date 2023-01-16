const prompt = require('prompt-sync')()
// var a = 15

// var a = 32

// let z = 64
// z = 75

// const pi = 3.14
// pi = 19

// let a = 12.15 // number
// let b = "javascript" // string
// let c = true // boolean
// let d = null
// console.log(d);

// arithmics oprators
// + * / -
let a = 15, b = 3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// % ** ++ --
console.log(a ** b);
console.log(a % b);
a++
console.log(a);


a = parseFloat(prompt("pleas enter a number : ")) // x
b = parseInt(prompt("pleas enter another number : ")) // y
// ...
// console.log(a); // y
// console.log(b); // x

console.log(a + b);

// asignment
// =
let w = 15
w += 3 // w = w + 3
w -= 3
w /= 3
w *= 3
w %= 3
w **= 3
console.log(w);