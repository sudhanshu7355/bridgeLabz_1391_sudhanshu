// Calculate 10!

function factorial(fact){
    for(let i=9;i>=1;i--){
        fact=fact*i;

    }
    return fact;
    

}

let ans=factorial(10);
console.log(ans);