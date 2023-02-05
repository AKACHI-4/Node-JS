// Creating a delay 

// Timing function

const waitTime = 3000; 
console.log(`setting up a ${waitTime/1000} second delay`)

const timerFinished = () => {
    clearInterval(interval);
    console.log("done")
}
setTimeout(timerFinished, waitTime); 

// incorporating setInterval

const waitInterval = 500; 
let curTime = 0;

const incrTime = () => { 
    curTime += waitInterval
    const p = Math.floor((curTime/waitTime)*100)
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.... ${p}`)
    // console.log(`After ${curTime/1000} seconds`)
}

const interval = setInterval(incrTime,waitInterval); 

// Reporting Progress with setInterval

