// console.log(process.argv);

function grab(flag){ 
    let idxAfterflag = process.argv.indexOf(flag) + 1; 
    return process.argv[idxAfterflag];
}

let greeting = grab("--greeting"); 
let user = grab("--user"); 

console.log(greeting)
console.log(user)
