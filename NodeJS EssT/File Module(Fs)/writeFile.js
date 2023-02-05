// The fs module also can be used to write or append data to a file

const fs = require("fs")

let md = `
    This is a New File 
    ==================

    ES6 Templates Strings are cool. They honor whitespaces. 

    * Template Strings
    * Node File System
    * ReadLine CLIs
`; 

fs.writeFile("output.md",md.trim(), function(err) {
    if(err)
        throw err; 
    fs.appendFileSync (
        "output.md",
        "\n\n### Node.js Everyone!\n\n"
    )
    console.log("Markdown created")
})

