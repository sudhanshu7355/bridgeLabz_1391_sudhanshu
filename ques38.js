// Create a function that will convert an array containing ASCII codes in a string

function asciiToString(asciiArray) {
    
    let result = asciiArray.map(code => String.fromCharCode(code)).join('');
    return result;
}

let asciiCodes = [104, 101, 108, 108, 111];  
let ans = asciiToString(asciiCodes);
console.log(ans);  
