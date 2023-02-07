// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

function fact(n){
    if (n == 1)
        return 1
    else
        return n * fact(n-1)
}



// fibbonoccie  better 
fibo(n) = fib(n-1) + fib(n-2)
fib(1) = 0
fib(2) = 1

function fibo(n){
    if(n == 1)
        return 0
    else if(n == 2)
        return 1
    else
        return fibo(n-1) + fibo(n-2)
}

// 4*fact(3)
// 3*fact(2)
// 2*fact(1)

console.log(fact(5));