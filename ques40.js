// Implement the bubble sort algorithm for an array of numbers

let arr=[30,15,40,5,25,35];
let temp;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            
        }
    }
}
console.log(arr);



