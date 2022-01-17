
//GLOBALS - NO WINDOW!!!

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed


console.log(__dirname)
let numCount = 1;
setInterval(()=> {
    console.log("Counting: ", numCount)
    numCount++;
}, 1000)


