// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function merge(arr1,arr2){
    let uniques=[];
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            uniques.push(arr1[i]);
        }
    }
    for(let j=0;j<arr2.length;j++){
        if(!arr1.includes(arr2[j])){
            uniques.push(arr2[j]);
        }
    }
    return uniques;

    
    
        
    }
    
    

let array1=[1,2,3,4,5];
let array2=[6,7,2,9,10];

let ans=merge(array1,array2);
console.log(ans);