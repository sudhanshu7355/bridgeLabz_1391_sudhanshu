// Create a function that returns an array with words from a sentence.


function wordarr(sen){
    let word=sen.split(' ');
    return word;

}
let sentence="hello this is sudhanshu";
let ans=wordarr(sentence);
console.log(ans);
