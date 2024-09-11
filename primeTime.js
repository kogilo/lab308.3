// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


let n = 2;
let nextN = n + 1;
while (true) {
    let isPrime = true;
    if (nextN <= 1) {
        isPrime = false;
    } else if (nextN ===2) {
        isPrime = true;
} else if ( nextN % 2 == 0) {
    isPrime=false;
} else {
    for (let i =3; i * i <= nextN; i+=2) {
        isPrime=false;
        break;
    }
}
}