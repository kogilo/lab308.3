// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


let limit = 10;
for (let n = 2; n <= limit; n++) { // 2 t0 n
    let IsPrime = true;
    // 2 - current num (i)
    for (let factor =2; factor <= n; factor++) {
        if (n % factor === 0) {
            IsPrime = false;
            break;

        }
            
    }
    if(IsPrime) console.log(n);
}