// Create a function that will capitalize the first letter of each word in a sentence
function capitalize(sen) {
    let wordsArray = sen.split(' ');  

    
    let capitalizedWords = wordsArray.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  // Capitalize first letter, lower the rest
    });

   
    return capitalizedWords.join(' ');
}

let sentence = "hello this is sudhanshu yadav";
let ans = capitalize(sentence);
console.log(ans);  
