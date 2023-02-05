// using require function 

const path = require("path"); 
// import path modules from node

console.log(__dirname)
console.log(
    `The file name is ${path.basename(__filename)}`
);

for(let key in global) {
    console.log(key)
}