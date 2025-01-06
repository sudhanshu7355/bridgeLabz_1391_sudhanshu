function countDistinctSubsequences(str) {
    let n = str.length;
    let result = 0;

    for (let i = 0; i < (1 << n); i++) {
        let subsequence = "";
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                subsequence += str[j];
            }
        }
        result++;
    }

    return result;
}

var str = "abcbac";
console.log(countDistinctSubsequences(str)); 