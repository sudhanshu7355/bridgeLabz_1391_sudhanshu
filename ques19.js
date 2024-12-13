// Create a function that will return in an array the first “p” prime numbers greater than “n”

function isprime(num){
    for(let i=2;i<num;i++){
        if(num%2===0){
            return false;
        }
    }
    return true;

}

function firstpprime(n,p){
    let primes=[];
    let number=n+1;
    while(primes.length<p){
        if(isprime(number)){
            primes.push(number);
        }
        number++;

    }
    return primes;

}
let n=10;
let p=5;
let ans=firstpprime(n,p);
console.log(ans);
