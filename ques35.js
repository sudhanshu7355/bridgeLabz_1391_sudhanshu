// Create a function to convert a CSV text to a “bi-dimensional” array

function csvToArray(csvText) {
    
    let rows = csvText.split('\n');

    
    let result = rows.map(row => row.split(','));

    return result;
}

let csvText = `name,age,city
John,25,New York
Jane,30,Los Angeles
Doe,22,Chicago`;

let ans = csvToArray(csvText);
console.log(ans);
