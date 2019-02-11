// Say Hello To The People!
// 1. - Populate the select options dynamically by iterating over the people array
//    - Create a template literal for an option element
//    - Append to the select element in the dom
// 2. Console.log "Hello[person's name]!" When a person is selected and the button is clicked!
let linkToHTML =document.getElementById("people")
//HTML Represntation
let HTMLRepresentation = function rep (name){

return  `<div>${name}</div>
`
addToDOM(HTMLRepresentation)
}
const people = ["Meg", "Steve", "kimmy", "Madi", "Jisie", "Joe", "Emily", "Andy"]
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    HTMLRepresentation(people)
}

//function to add to DOM
let addToDOM = function addMe (HTMLRepresentation){
    linkToHTML.innerHTML = HTMLRepresentation
    console.log(HTMLRepresentation)
}