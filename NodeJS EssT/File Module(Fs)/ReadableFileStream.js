// Streams in Node.JS give us a way to asynchronously handle continuous data flows

// Understanding how stream work can dramatically improve the way our application handles large data

// we have already been using stream 

// Standard output - process.stdout. - writeable stream 

// Standard input - process.stdin. - readable stream

// both of these implement the streams interface

const fs = require("fs")

// Problem - 

// fs.readFile(
//     "./chat-logs/george-ben-chat.log", "UTF-8", 
//     (err, chatLog) => { 
//        console.log(`File read ${chatLog.length}`) 
//     }
// ); 

// This will read the file and will work pretty fase but the problem is that readFile waits until the entire file is read before invoking the callback function 

// so before we have to invoking of callback function we have to read whole thing and if we are going to read a huge file so it's going to create some latency 

// so a better solution might be to use a readable stream

// Solution -

// now instead of reading an entire file at once, a stream breaks the file down into bits or into different chunks. 
// So readable streams raise data events and pass small chunks of data to our callback
// So we're not having to wait for an entire file before the first data chunk will log.
// we can use stream.once and we'll say on data

let stream = fs.createReadStream(
    "./chat-logs/george-ben-chat.log", "UTF-8"
); 

let data; 

stream.once("data", (chunk) =>{ 
    console.log("Read Stream Started")
    console.log("===================")
    console.log(chunk)
} ) // it will write everything to console 

stream.on("data", (chunk) => { 
    console.log(`chunk: ${chunk.length}`)
    data += chunk; 
})
// end event 
stream.on("end", () => { 
    console.log(`Finished ${data.length}`)
})

console.log("Reading the file !");