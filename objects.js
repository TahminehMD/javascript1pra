// let arr = [1,2,3,4,5,6,7,8]

const abc = require("prompt-sync")()

// let car = {brand:"ford", model:"mustang", year:1969}

// let car2 = {}
// car2.brand = "bmw"
// car2.model = "x6"
// car2.year = [2018,2020,2022]
// car2.color = "white"

// let Car = {
//     car1:{
//         brand: "ford", 
//         model: "mustang", 
//         year: 1969,
//         // age: function(){   method
//         //     return 2023 - this.year
//         // }
//         get age() {
//             return 2023 - this.year
//         }


//     },
//     car2:{
//         brand:"benz", 
//         model:"s500", 
//         year:0,

//         set carYear(carYear){
//             this.year = carYear;
//         }
//     }
// }
// car.[x]  is different with line 32 
// let x = abc("add property : ")

// let val = abc("add value : ")
// car[x] = val
// Car.car2.carYear = 2020

// console.log(Car.car1.age);

function Car(brand, model, year){
    this.carBrand = brand;
    this.carModel = model;
    this.carYear = year;
    this.madeIn = "USA";
}


// let car1 = new Car("ford", "mustang", 1969);
// console.log(car1);

let Cars = []
// for (let i = 0; i < 20; i++){
//     let brand = "";
//     let model = "";
//     let year = parseInt"";

//     let tmpCar = new Car(brand, model, year);
//     Cars.push(tmpCar)
// }
Cars.push(new Car("ford","mustang", 1969));
Cars.push(new Car("benz","s500", 2020));

Cars[1].madeIn = " "
console.log(Cars);