//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function fav_foods(person3){
    console.log(Object.values(person3))
    console.log(person3.shakes)
}

console.log(fav_foods(person3))




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }


// Use an arrow to create the printInfo method
    printInfo = () => {
        return `Name: ${this.name}, \nAge: ${this.age}, \nGender: ${this.gender}`
    }


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = () => {
        this.age += 1
        return `${this.name} is now ${this.age} years old.`
    }

    addAges = () => {
        this.age += 3
        return `${this.name} is now ${this.age} years old.`
    }
}

let felicia = new Person('Felicia', 1, 'female')
console.log(felicia.printInfo())
console.log(felicia.addAge())

let todd = new Person('Todd', 2, 'male')
console.log(todd.printInfo())
console.log(todd.addAges())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
word = 'cat'
const lengthOfStr = str => {
    return new Promise( (yes, no) => {
        str.length > 10 ? yes("big word") : no('small word')
    })
}

lengthOfStr(word)
.then((result => console.log(`${word} is a ${result}`)))
.catch((error => console.log(`${word} is a ${error}`)))


// ============= CODE WARS ============//
// 8kyu Beginner - Lost Without A Map
digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function double(digits){
    dubs = []
    for(let i = 0; i < digits.length; i++){
        dubs.push(i*2);
    }
    return dubs
}

console.log(double(digits))



// 8kyu Century From Year
century_of = 1705
function century(year){
    cent = Math.floor(year / 100)
    if(year % 100 > 0){
    cent += 1
    }
    return cent 
}

console.log(century(century_of))