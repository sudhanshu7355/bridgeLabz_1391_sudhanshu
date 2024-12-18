// Calculate the sum of first 100 prime numbers and return them in an array


        

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
    let sum = 0;
    
    while (primes.length < n) {
        if (isprime(number)) {
            primes.push(number);
            sum += number;
        }
        number++;
    }

    return { primes, sum }; 
}


let ans2 = firsthundredprime(100);


console.log("First 100 prime numbers:", ans2.primes);
console.log("Sum of the first 100 prime numbers:", ans2.sum);
