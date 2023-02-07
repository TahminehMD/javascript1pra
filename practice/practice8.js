function isPrime(n){
    for (let i = 2; i < n; i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

// 0 1 1 2 3 5 8 ...

// function fibo(n){
//     if (n == 1)
//         return 0
//     else if (n == 2)
//         return 1
//     else if (n > 2){
//         let a, b, c, i;
//         a = 0
//         b = 1
//         i = 2
//         while (i < n){
//             c = a + b
//             a = b
//             b = c
//             i++ 
//     }
//     return c
// }
// }


function fibo(n){
    if(n == 1)
        return 0
    else if(n == 2)
        return 1
    else
        return fibo(n-1) + fibo(n-2)
}
let n = 4
for (let i = 0; i < 8;){
    if(isPrime(fibo(n))){
        console.log(fibo(n));
        i++;
    }
    n++
}