let txt = "we are write code in \"javascript\"\n\tjavascript better than java"
// we are write code in "javascript"
console.log(txt.length);

console.log(txt.slice(7));
// let part  = txt.substring(7, 20);
part = txt.replace(/javascript/g, "python")

console.log(part.toLowerCase());

let text1 = "         hello            "
let text2 = "world"
// console.log(text1 + text2);
text1 = text1.trim()
console.log(text1[0]);