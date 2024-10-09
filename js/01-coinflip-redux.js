let numFlips = parseInt(prompt("How many times would you like to flip the coin?"));
let coinFlip;

for (let i = 0; i < numFlips; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
