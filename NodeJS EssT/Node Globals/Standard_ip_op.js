// Standard input and Standard output 
// These two process offers us a way to communicate with objects while it's running

process.stdout.write("Hare \n \n")

const questions = [ 
    "what is your name?",
    "what would you rather be doing?",
]
const answers = []

function ask(i=0) {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)
}

ask(); 

process.stdin.on("data", function (data) { 
    answers.push(data.toString().trim());
    if(answers.length < questions.length){ 
        ask(answers.length);
    } else { 
        process.exit(); 
    }
})

// Whole process will work asynchronously 
// means application is still in run 


process.on("exit", function() {
    process.stdout.write("\n \n \n")
    process.stdout.write(
        `${answers[0]} you love to do ${answers[1]}`
    )
})


// here we basically communicating with a running process