/*1. Define an array that has the words of a sentence as its items.
2. Define a function that accepts an array of words.
3. The responsibility of the function is to build a sentence, as a single string, from the array of words and return it.
4. Pass your array to the function as an argument value.*/
let words = ["I", "Am", "Sitting", "Here", "Thinking", "About", "How", "You", "Make", "Me", "Smiles", "Smile" ]
const fun = (sentence) => sentence.join(" ")
console.log(fun(words))



/*1. Define a function that accepts a single string as an argument.
2. The responsibility of the function is to return a boolean (true/false) if the sentence has a odd number of words in it.
3. Take the return value of the first function, and pass it to the second.
4. `console.log()` the result of the second function

Example:
"The sentence has an even number of words"
or 
"The sentence has an odd number of words"*/

function x(input){
    if (input.length % 2 === 0) {
        let trueOrFalse = true
        y(trueOrFalse)
        
    }
    else if (input.length % 2 !== 0) {
        let trueOrFalse = false
        y(trueOrFalse)
    }
   
}

x(words)
 
function y(inputTwo){
    if (inputTwo === true) {
        console.log("The sentence has an even number of words")
    }
    else (inputTwo === false)
        console.log("The sentence has an odd number of words")
        
}





// I want you to create two functions:
// first function create a dollFactory that accepts an array as an argument
// -pass each item into the second function.
// second function hairMachine that accepts an item as an argument and adds hair to the item.
// - if the item has green or brown eyes add the property hairColor with the value "Brown"
// - if blue eyes "blonde"
// also change the hasHair value appropriately

const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
]

function dollFactory(here) {
    for (let i = 0; i < here.length; i++) {
        let doll = dollBin[i];
        hairMachine(doll)
       
    }
}
dollFactory(dollBin)

function hairMachine(params) {
    
           
    if (params.eyeColor === "Green" || params.eyeColor === "Brown") {
    params.hairColor = "Brown"
}
    else if (params.eyeColor === "Blue"){
     params.hairColor === "Blonde"
 }
console.log(params)
} 
// console.log(hairMachine(doll))

