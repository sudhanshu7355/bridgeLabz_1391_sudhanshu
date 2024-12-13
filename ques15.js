// Create a function that will find the nth Fibonacci number using recursion
// let num1=0;
// let num2=1;
// console.log(num1);
// console.log(num2);

// for(let i=2;i<10;i++){
//     let ans=num1+num2;
//     console.log(ans);
//     num1=num2;
//     num2=ans;
    
    
// }

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


let ans=fibonacci(4);
console.log(ans);


