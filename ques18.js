// Print the first 100 prime numbers

function isprime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }

    }
    return true;
}
// let ans=isprime(7);
// console.log(ans);

function firsthundredprime(n){
    let primes=[];
    let number=2;
    while(primes.length<n){
        if(isprime(number)){
            primes.push(number);
        }
        number++;
    }
    return primes;
    

}
let ans2=firsthundredprime(100);
console.log(ans2);