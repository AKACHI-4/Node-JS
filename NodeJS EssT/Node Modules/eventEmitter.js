const events = require("events")

let emitter = new events.EventEmitter()

// creation of custom event 
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

// emittion of custom event 
emitter.emit("customEvent","Hare Krishna", "Adarsh")
emitter.emit("customEvent","Hello Node", "Computer")

// now use process.standardinput.on

// "data" - whenever there are some data

process.stdin.on ("data", (data) => { 
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent","GoodBye","process")
        process.exit(); 
    }
    emitter.emit(
        "customEvent", 
        data.toString().trim(),
        "terminal"
    )   
})
