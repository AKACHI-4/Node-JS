const fs = require("fs")

// readdirSync("./src")
// - read a directory 
// - means I read the content of this directory synchronously with a blocking request 
// Blocking request meaning I am blocking the rest of the process until the file is read

// When we use any methods of the file system module, we are given the option to use them - synchronously or asynchronously  

// let files = fs.readdirSync("./")

// another way to do above thing is 

fs.readdir("./", function(err, files) {
    if(err)
        throw err;
    console.log(files); 
})

// happen before the execution of above one
console.log("Reading files.....") 

// console.log(files)

// When our app is already running, its really nice to use asynchronous requests so that the process can do other things while your file or directory is being read 
