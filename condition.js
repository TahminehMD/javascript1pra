const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter another number : '))
let b = parseInt(prompt('please enter a number : '))

if (a > b) {
    console.log(`${a} bigger than ${b}`);
} else if (a < b) {
    console.log(`${b} bigger than ${a}`);
} else {
    console.log(`${a} equal to ${b}`);
}

let day = parseInt(prompt("enter day number : "))

// if (day == 1){
//     console.log('Mon');
// } else if (day == 2){
//     console.log('Tue');
// }

switch(day){
    case 1:
        console.log('Mon');
        break
    case 2:
        console.log('Tue');
        break
    case 3:
        console.log('Wed');
        break
    case 4:
        console.log('Thu')
        break
    default:
        console.log('wrong number');
        break
}

// 6
// 100

// count of cartons

// total price
// discount
// payment

// 1200 - 2400 5%
// 2400 - 3600 7%
// 3600 - 4800 10%
// 4800 14%

let countCartons = parseInt(prompt('enter another number : '))
let totalPrice= 100*countCartons*6
if (1200<totalPrice<2400){
    discount=0.05
    total=totalPrice * discount
    console.log(total-totalPrice)
}else if(2400<totalPrice<3600){
    discount=0.05
    total=totalPrice *  discount 
    console.log(total-totalPrice)
}else if(3600<totalPrice<4800){
    discount=0.10
    total=totalPrice * discount
    console.log(total-totalPrice)
}else if(
    totalPrice>4800){
    discount=0.14    
    total= totalPrice *discount
    console.log(total-totalPrice)
}

    


