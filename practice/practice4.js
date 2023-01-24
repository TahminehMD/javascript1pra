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
