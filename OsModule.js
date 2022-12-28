const os = require("os");

// check OS architecture
console.log(os.arch());

//check freememory
const memory = os.freemem();
console.log(`${memory / 1024 / 1024 / 1024}`);

//check totalmemory
const totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`);

//check hostname
console.log(os.hostname());

//check platform
console.log(os.platform());

//check operating system
console.log(os.type());
