let arr=[10,20,15,14,20];
let min=arr[0];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    if(arr[i]<min){
        min=arr[i];

    }
}
console.log(min);
console.log(sum);