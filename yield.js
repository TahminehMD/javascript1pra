function* showPrice(n){
    while(n < 3){
        yield n++;
    }
}

const q = showPrice(0);

console.log(q.next().value);
console.log(q.next().value);
console.log(q.next().value);