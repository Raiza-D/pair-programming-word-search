/* Pair Programming - Word Search
Partners: Raiza de Guzman (GitHub: @Raiza-D) & Yoyo Yang (GitHub: @yoyotruly */

const transpose = function(matrix) {
  let newArr = [];
  for (let row = 0; row < matrix[0].length; row++) {
    newArr.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      newArr[column][row] = matrix[row][column];
    }
  }
  return newArr;
};

const join = function(array) {
  return array.map(item => item.join(''));
}

const reverse = function(array) {
  return array.map(item => item.reverse())
}

const checkExist = function(array, word) {
  for (string of array) {
    if (string.includes(word)) {
      return true
    }
  }
}

const wordSearch = (letters, word) => {
  if (!Array.isArray(letters) || !letters.length) {
      return false;
  }
  
  const horizontalJoin = join(letters);

  const transposedLetters = transpose(letters);
  const verticalJoin = join(transposedLetters);

  const backwardsLetters = join(reverse(letters));
  const backwardsTransposedLetters = join(reverse(transposedLetters));

  if (checkExist(horizontalJoin, word)) return true;
  if (checkExist(verticalJoin, word)) return true;
  if (checkExist(backwardsLetters, word)) return true;
  if (checkExist(backwardsTransposedLetters, word)) return true;

  return false;
};



module.exports = wordSearch;

const wordSearch2 = function(arr, word) {
   for (let i = 0; i < arr.length; i++) {
     let emptyArr = [];

     for (let j = 0; j >= 0; j--) {
         console.log(arr[i][j])
         emptyArr.push(arr[i][j]);
     }
     console.log(emptyArr);     
   }
}

const result = wordSearch2(
  [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"]
  ],
  "ARIELLE"
);

/*
arr rows = 3, i range [0, 1, 2]
arr cols = 4, j range [0, 1, 2, 3]

                        arr[0][0]   1 element
            arr[1][0],  arr[0][1]   2
arr[2][0],  arr[1][1],  arr[0][2]   3
arr[2][1],  arr[1][2],  arr[0][3]   3
arr[2][2],  arr[1][1]               2
arr[2][3]                           1

*/

console.log(result);