// Rotate a Matrix

function rotateMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    for (let i = 0; i < n; i++) {
      matrix[i] = matrix[i].reverse();
    }
  }
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  rotateMatrix(matrix);
  
  console.log(matrix);
  