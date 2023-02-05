const path = require("path"); // path Module - to know file location
const util = require("util"); // utility Module - to know time data like details
// util has a log method as well
const v8 = require("v8"); // utility Module - to know memory using


console.log(path.basename(__filename)); 

// Creating path string using path.join()

const dirUploads = path.join(
    __dirname,
    "www",
    "file",
    "uploads"
)

// console.log(dirUploads)
util.log(dirUploads)

util.log(path.basename(__filename))


util.log(v8.getHeapStatistics())
