let nums = [1,5,8,6,3,1,2]

// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// let names = []

// names[0] = "mahdi"
// names[1] = "codepedia"
// names[2] = 23
// names[6] = "sara"

// names.push("mahsa")

// console.log(names);

// // const cars = new Array()


// // ASCII UTF-8
// // 65 => A
// const prompt = require('prompt-sync')()
// let numbers = []
// let numbers2=[]
// for (let i =0; i< 20; i++){
//     let x = parseInt(prompt("enter a number : "))
//     numbers.push(x);
// }
// for (let i=0 ; i<numbers.length; i++){
//     if (numbers[i]%2==0){
//         numbers2.push(numbers[i])
//     }
// }
// console.log(numbers2);

nums.push(201); // add to last

nums.pop() // remove last item
console.log(nums);

nums.unshift(101) // add to first
console.log(nums);

nums.shift() // remove first item
console.log(nums);

let n = [1001,1002,1003]
let temp = [25, 35, 45 ,55 ,65]

const res = n.concat(nums, temp)
console.log(res);

res.splice(1,0, 75, 85, 95,105,115)  //??   W[  ]
console.log(res);

const res2 =res.slice(7,15)
console.log(res2);

res.sort(function(a, b){return a - b})
console.log(res);
