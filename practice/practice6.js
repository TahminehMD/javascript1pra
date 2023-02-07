const prompt = require('prompt-sync')()

function Sum(arr){
    let res = 0
    for (let i = 0; i < arr.length; i++){
        res += arr[i]
    }

    return res
}


let scores=[]

for(let i=0;i<=10;){
    let studentScores = parseInt(prompt('enter  the student score : ')) 
    if(studentScores >= 0 && studentScores<=100){
        scores.push(studentScores)
        i++ // loop step
    } else {
        console.log("you enter a wrong number");
    }

}
scores.sort(function(a, b){return a - b})
console.log(scores);
let resultMax=scores[scores.length- 1]
console.log(resultMax);
let resultMin=scores[0]
console.log(resultMin);

// let sum = 0
// for ( let i=0; i<scores.length; i++){
//     sum += scores[i]
// }
// let ave= (sum / scores.length)
let ave = (Sum(scores) / scores.length)
console.log(ave);

console.log(scores);

// standard division
let tmp = 0
for (let j = 0; j < scores.length; j++){
    tmp += ((scores[i] - ave)**2)
}

let variance = tmp/scores.length

// find sqrt
Math.sqrt(variance)
variance ** (1/2)