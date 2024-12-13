// Find the maximum number in an array of numbers

const arr=[30,10,15,25,12,45,23];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }

}
console.log(max);