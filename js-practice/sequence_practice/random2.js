// find 5 random 2 digit values and find their sum and average
let sum=0;
for(let i=0;i<5;i++){
    
    sum=sum+Math.floor(Math.random()*10);;

}
let avg=sum/5;
console.log(avg);
console.log(sum);
