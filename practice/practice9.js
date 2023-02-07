const prompt = require('prompt-sync')()

function kg_to_g(val){
    return val * 1000
}

function g_to_kg(val){
    return val * 0.001
}

function menu(){
    console.log("ewlcome to my app.");
    console.log("select one ");
    options = ["kg -> g", "g -> K", "Exit"]
    // console.log("1. kg convert To g\n2. g convert To kg\n3. Exit");
    for (let i=0; i < options.length; i++){
        console.log(`${i+1}. ${options[i]}`);
    }
    let select = parseInt(prompt("> "))
    return select
}



function main(){
    switch(menu()){
        case 1:
            let value = parseFloat(prompt('request  your value : '))
            console.log(kg_to_g(value))
    }
}

main()