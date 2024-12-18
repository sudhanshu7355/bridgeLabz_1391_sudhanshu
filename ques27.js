// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinct(arr){
    return [...new Set(arr)];

}

let array=[1,2,3,4,3,5];
let ans=distinct(array);
console.log(ans);