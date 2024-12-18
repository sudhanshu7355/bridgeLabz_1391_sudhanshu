// Create a function that will return the number of words in a sentence
let count = 0;
function words(sen) {
    
    let wordsArray = sen.split(' ');

    
    for (let i = 0; i < wordsArray.length; i++) {
        count = count + 1; 
    }

    return count;
}

let sentence = "hello this is sudhanshu";
let ans = words(sentence);
console.log(ans); 
