// we can also create directories with the file System module's mkdir function 

const fs = require("fs"); 

if(fs.existsSync("your-files-here")) {
    console.log("Already there !!")
} else { 
    fs.mkdir("your-files-here", function(err) {
        if(err)
            console.log(`Error: ${err}`)
        else
            console.log("Directory created")
    })
}



