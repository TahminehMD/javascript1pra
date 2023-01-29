const prompt = require('prompt-sync')()
// let num = prompt('please enter a number : ');

// if (num%2===0){
//    console.log(`num is even`);
// }else if(num%2!=0){
//     console.log(`num is odd`);
// }
// let n = parseInt(prompt('please enter a number : '))
for (let n = 100000000; n < 1000000000; n++) {
    let isPrime = true

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime == true) {
        console.log(`${n} is prime`);
        break;
    }
}