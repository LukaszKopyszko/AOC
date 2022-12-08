var fs = require("fs");
var input = fs.readFileSync("./input.txt").toString('utf-8');

function game() {

    //scores
    const win = 6;
    const draw = 3;
    const lose = 0;
    //shapes
    const rock = 1;
    const paper = 2;
    const scissors = 3;



    console.log(input);
}
game();