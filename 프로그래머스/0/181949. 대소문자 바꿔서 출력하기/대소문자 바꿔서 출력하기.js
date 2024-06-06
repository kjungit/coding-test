const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("")
    const result = str.map((item) => {
        if(item === item.toUpperCase()) {
            return item.toLowerCase()
        } else {
            return item.toUpperCase()
        }
    })
    console.log(result.join(""))
});