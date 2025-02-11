const start = 1;
const end = 100;

for (let i = start; i <= end; i++) {
    if(i % 10 == 0) {
        console.log("Checkpoint! ", i);
    }
    if (i % 50 == 0 && i<51) {
        console.log("Half way there! ");
    }
    if (i % 100 == 0) {
        console.log("You made it! ");
        console.log("All, done!")
    }
}