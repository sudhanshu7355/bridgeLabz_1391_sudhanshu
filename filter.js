let numbers=[1,2,3,4,5,6,7];
let Evenums=numbers.filter(isEven);
console.log(Evenums);

function isEven(element){
    return element%2===0;
}