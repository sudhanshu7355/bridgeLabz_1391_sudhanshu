// Rotate an array to the left 1 position

function rotatearr(arr){
    let firstelement=arr.shift();
    arr.push(firstelement);
    return arr;

}
let array=[1,2,3,4,5];
let ans=rotatearr(array);
console.log(ans);
