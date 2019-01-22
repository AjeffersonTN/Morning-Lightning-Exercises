// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

const sum = function (num1, num2) {
    console.log(num1 + num2)
}
const difference = function (num1, num2) {
    console.log(num1 - num2)
}
// sum(24, 17)
// sum(2, 19)
// difference(24, 17)
// difference(24, 17)

// Create another function called `calculate` that takes three arguments: two numbers and a function

const calculate = function (num1, num2, fn) {
   fn(num1, num2)//invoked the function fn within calculate
   console.log(calculate)
}
calculate(90, 80, sum)
