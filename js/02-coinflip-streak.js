let coinFlip;
let streak = 0;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
        streak++;
    } else {
        console.log("Tails");
    }
} while (coinFlip === 0);

console.log(`Your streak was ${streak} flips!`);
