function msg(x){
    console.log(x);
}

function add(x, y){
    return x + y;
}

msg("javascript")
msg("python")
console.log(add(5,7)+3)
// msg()
// msg()

function Sum(arr){
    let res = 0
    for (let i = 0; i < arr.length; i++){
        res += arr[i]
    }

    return res
}

arr = [4,5,7,8,9,1,4]

console.log(Sum(arr)/arr.length);


//

let add = (x, y) => x + y

