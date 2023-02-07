
function Num(array){   
    let max = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] > max)
            max = array[i]
        
    }
    return max

   
}
let array = [2,4,6,8,10,18,16,22,24,28]
console.log(Num(array))

function numbers2(array){   
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if(array[i] < min)
            min = array[i]
        
    }
    return min

   
}
let numbers = [1,2,3,45,6,60,7]    
console.log(numbers2(array));
