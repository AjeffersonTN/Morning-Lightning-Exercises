fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/AjeffersonTN/events")
.then(events => events.json())
.then(parsedEvents => {
    console.log(parsedEvents)
    console.log(parsedEvents[0].payload.commits[0].message)
    //set the message pf the parsed elements equal to the varable maessage
    let message = parsedEvents[0].payload.commits[0].message

    //allowed me to target the ID of outut in my html document and set it to a variable
    let art = document.getElementById("output")

    //this puts the message contents on the DOM at the element output
    art.innerHTML = message
    //look at the console.log for your latest "Push Event"
    //parse that index in the array, and print your latest commit message to the DOM
})
