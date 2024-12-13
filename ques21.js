// Rotate an array to the right 1 position
function rotatearr(arr){
    let lastelement=arr.pop();
    arr.unshift(lastelement);
    return arr;

}
let array=[1,2,3,4,5];
let ans=rotatearr(array);
console.log(ans);