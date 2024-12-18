// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

function firstarr(arr1,arr2){
    let first=[];
    for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
        first.push(arr1[i]);
    }
    
}
return first;


}

let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];
let ans=firstarr(array1,array2);
console.log(ans);