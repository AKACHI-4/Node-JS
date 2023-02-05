// The file system module has methods for rename and remove of the file as well

const fs = require("fs")


// ### RENAMING OF FILES

// fs.renameSync("./lib/config.js", "./lib/project-config.js")

// console.log("Config.js file renamed !!")

// fs.rename("./lib/notes.md","./notes.md", function (err) {
//     if(err)
//         throw err; 
//     console.log("Notes renamed successfully"); 
// })

// console.log("Config.js file renamed !!")


// ### REMOVING OF FILES

fs.unlinkSync("./lib/project-config.js")

// fs.unlinkSync("./notes.md", function(err) { 
//     if(err)
//         throw err
//     console.log("Notes file removed")
// })