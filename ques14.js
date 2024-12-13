// Print the first 10 Fibonacci numbers without recursion

let num1=0;
let num2=1;
console.log(num1);
console.log(num2);

function fibbo(num){
    for(let i=1;i<=num;i++){
        let ans=num1+num2;
        console.log(ans);
              num1=num2;
               num2=ans;
    }
    
}
fibbo(10);

