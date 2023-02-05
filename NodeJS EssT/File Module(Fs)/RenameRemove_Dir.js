// Rename and move directories as well 

const fs = require("fs")

// fs.renameSync("./assets/logs","accounts/logs")
// console.log("Logs folder moved")

// fs.rmdir("./assets", function(err) { 
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("assets directory removed !!") 
//     }
// })

// removedir and removedirsync will not gonna work if they have subdirectory in them for removing directory should be empty 
// means if we want to remove a directory so we have to get rid of everything that's inside of it

// All file name + Dir names will display here
fs.readdirSync("./accounts").forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./lib/${file}`)
})

console.log("Files moved")

// fs.rmdirSync("./accounts"); 

// console.log("accounts folder removed")