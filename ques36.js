// Create a function that converts a string to an array of characters

function tochar(sen){
    let chararray=sen.split('');
    return chararray;


}

let sentence="this is sudhanshu";
let ans=tochar(sentence);
console.log(ans);