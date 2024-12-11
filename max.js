let arr=[10,20,-15,14,-30,25];
let max=arr[0];
let sum=0;
let negarr=[];
let num=0


for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<num){
        negarr.push(arr[i])
    }

}
console.log(max);
console.log(sum);
console.log(negarr);