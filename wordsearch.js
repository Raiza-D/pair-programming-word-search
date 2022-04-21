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
