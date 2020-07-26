// Note: Try to solve this task in-place (with O(1) additional memory),
// since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image.
// Rotate the image by 90 degrees (clockwise).

function rotateImage(m) {
  let n = m.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      let temp = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = temp;
    }
  }
  return m;
}

//following is to test that solution works:
console.log(
  rotateImage([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ])
);
// expected outcome: // expected outcome:[[9,8,7],[6,5,4],[3,2,1]]
