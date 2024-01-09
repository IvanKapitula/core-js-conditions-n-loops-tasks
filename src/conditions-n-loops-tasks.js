/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number > -1) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result;
  if (a === b && b === c) {
    result = a;
  }
  if (a === b && b > c) {
    result = a;
  }
  if (a === b && b < c) {
    result = c;
  }
  if (c === b && b < a) {
    result = a;
  }
  if (c === b && b > a) {
    result = b;
  }
  if (c > b && c > a) {
    result = c;
  }
  if (b > a && b > c) {
    result = b;
  }
  if (a > c && a > b) {
    result = a;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const array = [];
  let queenX = queen.x;
  let queenY = queen.y;
  const kingX = king.x;
  const kingY = king.y;
  if (queenX === kingX || queenY === kingY) {
    return true;
  }
  for (let i = 0; i < 8; i += 1) {
    if (!(queenX < 1 || queenX > 7 || queenY < 1 || queenY > 7)) {
      queenX -= 1;
      queenY += 1;
      array.push(`${queenX}${queenY}`);
    }
  }
  queenX = queen.x;
  queenY = queen.y;
  for (let i = 0; i < 8; i += 1) {
    if (!(queenX < 1 || queenX > 7 || queenY < 1 || queenY > 7)) {
      queenX += 1;
      queenY -= 1;
      array.push(`${queenX}${queenY}`);
    }
  }
  queenX = queen.x;
  queenY = queen.y;

  for (let i = 0; i < 8; i += 1) {
    if (!(queenX < 1 || queenX > 7 || queenY < 1 || queenY > 7)) {
      queenX += 1;
      queenY += 1;
      array.push(`${queenX}${queenY}`);
    }
  }

  queenX = queen.x;
  queenY = queen.y;

  for (let i = 0; i < 8; i += 1) {
    if (!(queenX < 2 || queenX > 7 || queenY < 2 || queenY > 7)) {
      queenX -= 1;
      queenY -= 1;
      array.push(`${queenX}${queenY}`);
    }
  }
  queenX = queen.x;
  queenY = queen.y;

  array.push(`${queenX}${queenY}`);

  if (array.includes(`${kingX}${kingY}`)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => `true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a > b && a > c) {
    if (b === c) {
      const height = Math.sqrt(b ** 2 - a ** 2 / 4);

      if (height) {
        return true;
      }
    }
  }
  if (b > a && b > c) {
    if (a === c) {
      const height = Math.sqrt(a ** 2 - b ** 2 / 4);

      if (height) {
        return true;
      }
    }
  }
  if (c > b && c > a) {
    if (b === a) {
      const height = Math.sqrt(b ** 2 - c ** 2 / 4);

      if (height) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const roman = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
    'XXXIX',
    'XL',
  ];
  let res;
  for (let i = 0; i < roman.length; i += 1) {
    if (i === num) {
      res = roman[i - 1];
    }
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  let count = 0;
  for (let i = 0; i < numberStr.length; i += 1) {
    count += 1;
    if (count === 1) {
      switch (numberStr[i]) {
        case '0':
          res += 'zero';
          break;
        case '1':
          res += 'one';
          break;
        case '2':
          res += 'two';
          break;
        case '3':
          res += 'three';
          break;
        case '4':
          res += 'four';
          break;
        case '5':
          res += 'five';
          break;
        case '6':
          res += 'six';
          break;
        case '7':
          res += 'seven';
          break;
        case '8':
          res += 'eight';
          break;
        case '9':
          res += 'nine';
          break;
        case '-':
          res += 'minus';
          break;
        case '.':
          res += 'point';
          break;
        case ',':
          res += 'point';
          break;
        default:
      }
    }
    if (count > 1) {
      switch (numberStr[i]) {
        case '0':
          res += ' zero';
          break;
        case '1':
          res += ' one';
          break;
        case '2':
          res += ' two';
          break;
        case '3':
          res += ' three';
          break;
        case '4':
          res += ' four';
          break;
        case '5':
          res += ' five';
          break;
        case '6':
          res += ' six';
          break;
        case '7':
          res += ' seven';
          break;
        case '8':
          res += ' eight';
          break;
        case '9':
          res += ' nine';
          break;
        case '-':
          res += ' minus';
          break;
        case '.':
          res += ' point';
          break;
        case ',':
          res += ' point';
          break;
        default:
      }
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const res = [];
  let result = true;
  for (let i = 0; i < str.length; i += 1) {
    res[str.length - 1 - i] = str[i];
  }
  for (let i = 0; i < str.length; i += 1) {
    if (res[i] !== str[i]) {
      result = false;
    }
  }
  if (result) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i;
  let res;
  for (i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
    }
  }
  if (res > -1) {
    return res;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numString = String(num);
  const numDigit = String(digit);
  for (let i = 0; i < numString.length; i += 1) {
    if (numString[i] === numDigit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let res;
  function resSumUp(mas, ind) {
    let sum = 0;
    for (let i = ind; i < mas.length; i += 1) {
      sum += mas[i];
    }
    return sum;
  }
  function resSumDown(mas, ind) {
    let sum = 0;
    for (let i = 0; i < ind + 1; i += 1) {
      sum += mas[i];
    }
    return sum;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (resSumDown(arr, i - 1) === resSumUp(arr, i + 1)) {
      if (res === undefined) {
        res = i;
      }
    }
  }
  if (res > -1) {
    return res;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  let count = 1;
  let startColums = 0;
  let endColumns = size - 1;
  let startRows = 0;
  let endRows = size - 1;
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
    for (let j = 0; j < size; j += 1) {
      result[i][j] = '';
    }
  }

  while (startColums <= endColumns && startRows <= endRows) {
    for (let i = startColums; i <= endColumns; i += 1) {
      result[startRows][i] = count;
      count += 1;
    }
    startRows += 1;
    for (let j = startRows; j <= endRows; j += 1) {
      result[j][endColumns] = count;
      count += 1;
    }
    endColumns -= 1;
    for (let i = endColumns; i >= startColums; i -= 1) {
      result[endRows][i] = count;
      count += 1;
    }
    endRows -= 1;
    for (let i = endRows; i >= startRows; i -= 1) {
      result[i][startColums] = count;
      count += 1;
    }
    startColums += 1;
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
  // const res = [];
  // for (let i = matrix.length - 1; i >= 0; i -= 1) {
  //   for (let k = 0; k < matrix[i].length; k += 1) {
  //     if (!res[k]) {
  //       res[k] = [];
  //     }
  //     res[k].push(matrix[i][k]);
  //   }
  // }
  // console.log(res);
  // return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    for (let j = 0; j < newArr.length; j += 1) {
      if (newArr[j - 1] > newArr[j]) {
        [newArr[j - 1], newArr[j]] = [newArr[j], newArr[j - 1]];
      }
    }
  }
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let onePart = '';
  let twoPart = '';
  let result = '';
  for (let j = 0; j < iterations; j += 1) {
    onePart = '';
    twoPart = '';
    if (result.length !== 0) {
      for (let i = 0; i < result.length; i += 1) {
        if (i % 2 !== 0) {
          twoPart += result[i];
        } else {
          onePart += result[i];
        }
      }
      result = onePart + twoPart;
    } else {
      for (let i = 0; i < str.length; i += 1) {
        if (i % 2 !== 0) {
          twoPart += str[i];
        } else {
          onePart += str[i];
        }
      }
      result = onePart + twoPart;
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
