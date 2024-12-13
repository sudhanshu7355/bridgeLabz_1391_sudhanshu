// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
  }
  const numbers = [-10, 3, 5, -2, 0, 8, -1];
  const positiveNumbers = filterPositiveNumbers(numbers);
  
  console.log(positiveNumbers); // Output: [3, 5, 8]
    