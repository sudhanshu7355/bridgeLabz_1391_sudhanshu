// Create a function that will convert a string in an array containing the ASCII codes of each character
function toAsciiCodes(sen) {
    
    let asciiArray = sen.split('').map(char => char.charCodeAt(0));
    return asciiArray;
}

let sentence = "hello";
let ans = toAsciiCodes(sentence);
console.log(ans);  
