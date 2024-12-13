// Calculate the sum of digits of a positive integer number

let num=123;
let rem;
let sum=0;
for(let i=0;i<3;i++){
       rem=num%10;
       num=Math.floor(num/10);
       sum=sum+rem;

}
console.log(sum);