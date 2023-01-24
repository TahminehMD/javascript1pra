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
const prompt = require('prompt-sync')()
let countCartons = parseInt(prompt('enter another number :'))

const cost_per_product = 6, count_of_product = 100

let totalPrice = countCartons * cost_per_product * count_of_product
let discount = null

if (1200<=totalPrice && totalPrice < 2400){
    discount=0.03
}else if(2400<=totalPrice && totalPrice<3600){
    discount=0.05
}else if(3600<=totalPrice && totalPrice<4800){
    discount=0.7
}else if(totalPrice>4800){
    discount=0.1    
}

console.log(`total price ${totalPrice}`);
console.log(`discount ${totalPrice * discount}`);
console.log(`payment ${totalPrice - totalPrice * discount}`);
