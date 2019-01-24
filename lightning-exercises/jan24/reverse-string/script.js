// Use your Google fu, or look in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#), to find a way to output the string "I am a rockstar ninja unicorn JS dev" from this array.

// You will need to reverse the order of the strings in the array and then join them together into a single string.


// MDN Web Docs
// Array
// The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
let rev = hyperbole.reverse()
console.log(rev.join(" ").toUpperCase())

// steve solution
console.log(hyperbole.map(taco => taco.toUpperCase()).reverse().join(" "))