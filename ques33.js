// Calculate the sum of numbers received in a comma delimited string
function addstr(add) {
    
    let wordstring = add.split(',');

    
    let sum = wordstring.reduce((acc, num) => acc + parseFloat(num), 0);

    return sum;
}

let str = "10,20,30,40,50";
let ans = addstr(str);
console.log(ans);  

