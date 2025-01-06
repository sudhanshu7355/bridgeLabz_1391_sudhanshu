// Sliding Window Maximum

function maxSlidingWindow(arr, k) {
    const result = [];
    for (let i = 0; i <= arr.length - k; i++) {
      result.push(Math.max(...arr.slice(i, i + k)));
    }
    return result;
  }
  
  const arr = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;
  console.log(maxSlidingWindow(arr, k));