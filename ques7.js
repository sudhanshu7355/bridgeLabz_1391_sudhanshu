// Calculate the sum of even numbers greater than 10 and less than 30
let n=30;
let sum=0;
for(let i=10;i<n;i++){
    if(i%2===0){
        console.log(i);
        sum=sum+i;
    }
}
console.log(sum);