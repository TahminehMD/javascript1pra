let st = "codepedia"
// 1-> c
// 1-> o
// 2-> d
let alphabets ="abcdefghijklmnopqrstuvwxyz"
function count(string){
    for( let j = 0; j <alphabets.length; j++){
        let cnt = 0
        for (let i=0 ;i<string.length; i++ ){
            if(alphabets[j] == string[i])
                cnt++
        }
        if (cnt != 0)
            console.log(`${cnt} -> ${alphabets[j]}`);
    }
}

count(st)

function countNum(string){
    for (let i=0;i<string.length ;i++){
        let cnt=0
        for (let j=0; j<alphabets; j++){
            if (string[i]==alphabets[j]){
                cnt++
            }
        }if(cnt !=0){
            console.log(` ${alphabets[j]}-> ${cnt} `);
        }
    }
}
countNum(st)