const prompt = require('prompt-sync')()
let num1 = parseInt(prompt('enter another number :'))
let num2 = parseInt(prompt('enter another number :'))
let num3 = parseInt(prompt('enter another number :'))
let num4 = parseInt(prompt('enter another number :'))

if (num1 > num2 && num1 > num3 && num1 > num4) {
    console.log(`biggestNum ${num1}`)
}else if (num2 > num3 && num2 > num4) {
    console.log(`biggestNum ${num2}`)
}else if (num3 > num4) {
    console.log(`biggestNum ${num3}`)
}else {
    console.log(`biggestNum ${num4}`)
}
