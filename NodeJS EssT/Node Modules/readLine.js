// readLine module allow us to ask questions of out terminal user

// Wrapper around standard input and standard output process

// allow us to easily control user prompt without having to work directly with stdin and stdout

// Moved to lib > collectAnswers.js 
// const readLine = require("readline")

// const rl = readLine.createInterface({ 
//     input: process.stdin, 
//     output: process.stdout
    
// })

const collectAns = require("./lib/collectAnswer")

const questions = [
    "What's your name? ",
    "Where do you live? ",
    "What are you going to do with Node.js? "
]

// Moved to lib > collectAnswers.js 
// function collectAns(questions, done) { 
//     const answers = [];

//     const questionAnswered = answer =>{ 
//         answers.push(answer.trim())
//         if(answers.length < questions.length){
//             rl.question(
//                 questions[answers.length],
//                 questionAnswered
//             )
//         } else { 
//             return done(answers) 
//         }
//     }; 

//     rl.question(questions[0], questionAnswered)
// }

// rl.question("How was your day? > ", (answer) => {
//     console.log(`Your answer: ${answer}`); 
// })

const answerEvents = collectAns(questions, (answers) => {
    console.log("Thank you for the answers")
    console.log(answers)
    process.exit();
})

answerEvents.on("answer", answer => { 
    console.log(`The answer is ${answer}`)
})

