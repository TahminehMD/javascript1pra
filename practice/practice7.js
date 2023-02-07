// 1,5,10,20,50,100

// 342
// 3 => 100
// 0 => 50
// 2 => 20
// 0 => 10
// 0 => 5
// 2 => 1
const prompt = require('prompt-sync')()


function ATM(n){
    let num=[100,50,20,10,5,1]
    for (let i = 0;i < num.length ;i++){
        let res= parseInt(n/num[i])
        n %= num[i]
        console.log(`${res} => ${num[i]}`);
    }
}

let choice;
while(true){
    let money = parseInt(prompt('request  your money : '))
    ATM(money);

    choice = prompt("Do you want to continue y | n ... ");
    if (choice == 'y' || choice == 'Y')
        continue
    else 
        console.log("see you ...");
        break
}