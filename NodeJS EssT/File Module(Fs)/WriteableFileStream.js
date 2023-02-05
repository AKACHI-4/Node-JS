// The other side of the stream coin is writeable streams 
// Writeable stream is used to write the data chunks that are being read by the readable streams


// Standard input and Standard output 
// These two process offers us a way to communicate with objects while it's running

const fs = require("fs"); 

let ansStream ;

const questions = [ 
    "what is your name?",
    "what would you rather be doing?",
]
let answers = []

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)
}

process.stdin.on("data", (data) => { 
    let name = data.toString().trim(); 
    let fileName = `./${name}.md`; 
    if(fs.existsSync(fileName)){
        fs.unlinkSync(fileName)
    }
    
    ansStream = fs.createWriteStream(fileName)
    ansStream.write(
        `Question answers for ${name}
        \n================\n
        `
    )

})

process.stdin.on("data", function (data) { 
    let answer = data.toString().trim()

    ansStream.write(
        `Question: ${questions[answers.length]}\n`
        )
        
    ansStream.write(
        `Answer: ${answer}\n`, 
        function () { 
            if(answers.length < questions.length){ 
                ask(answers.length);
            } else { 
                process.exit(); 
            }
        })
        answers.push(answer)
    })

process.on("exit", function() {
    ansStream.close();
    process.stdout.write("\n \n \n")
    process.stdout.write(
        `${answers[0]} you love to do ${answers[1]}`
        )
        process.stdout.write("\n \n \n")
    })
            
ask(answers.length); 