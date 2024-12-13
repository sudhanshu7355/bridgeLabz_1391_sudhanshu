// Create a function that will merge two arrays and return the result as a new array



function merge(arr1,arr2){
    return [...arr1,...arr2];
    
}
let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];

let ans=merge(array1,array2);
console.log(ans);

