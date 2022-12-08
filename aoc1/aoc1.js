var fs = require("fs");
var text = fs.readFileSync("./elves.txt").toString('utf-8').replace(/\r/g, "").trim().split("\n\n");


function sumCalories() {
    const calories = text.map((elf) => {
        const calories = elf.split("\n").map(Number);
        return calories.reduce((previous, current) => previous + current, 0);
        
    });

    const max = calories.reduce((a,b) => Math.max(a,b), -Infinity);
    console.log(`Single Max: ${max}`);

    
    const sorted = calories.sort((a,b) => b-a).slice(0, 3).reduce((a,b) => a+b, 0);
    console.log(`Top 3 sum: ${sorted}`);
    
}
sumCalories();