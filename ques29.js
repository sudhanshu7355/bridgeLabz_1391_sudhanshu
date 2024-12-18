// Print the distance between the first 100 prime numbers

function isprime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false;
    }
    return true;
}


function firsthundredprime(n) {
    let primes = [];
    let number = 2;
    
    while (primes.length < n) {
        if (isprime(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes;
}


let primes = firsthundredprime(100);


let difference = primes[99] - primes[0];


console.log("Difference between the first and 100th prime:", difference);


