/*-- I want you to put an event listener on the container div and when the font button is clicked I want the font to change
    and when the color button is clicked I want the text color to change. Make the necessary changes to the HTML to get it
    to work. You will need to make a css file with 2 classes on it! -->*/
document.getElementById("font").addEventListener("click", fucntion(){
  document.getElementById("container").style.color = "blue"
})

document.getElementById("color").addEventListener("click", fucntion(){
  document.getElementById("container").style.fontStyle = "italic"
})
