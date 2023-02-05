// Another feature of FS module - reading the files

// going to allow us to read the contents of the file encoded into some sort of a text format 

const fs = require("fs"); 

// let ipsum = fs.readFileSync("./readme.md", "UTF-8"); 

// Way - 2
fs.readFile("./readme.md", "UTF-8", (err,ipsum) => { 
    if(err)
        throw err; 
    console.log(ipsum)
})

console.log("Reading the files.... ") // happens first 

// console.log(ipsum)