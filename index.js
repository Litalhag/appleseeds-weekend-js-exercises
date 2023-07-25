// Exercise 1.1:
function boolean(value) {
  return value ? "yes" : "no";
}
// arrow function:
const boolean2 = (value) => (value ? "yes" : "no");
//---------------------------------------------------
// Exercise 2.1:
function lowerNumSum(numbers) {
  let num1 = numbers[0];
  let num2 = numbers[1];

  if (num2 < num1) {
    [num1, num2] = [num2, num1];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < num1) {
      num2 = num1;
      num1 = currentNumber;
    } else if (currentNumber < num2) {
      num2 = currentNumber;
    }
  }

  return num1 + num2;
}
// OR:
function lowerNumSum(array) {
  let num1 = Number.MAX_VALUE;
  let num2 = Number.MAX_VALUE;
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < num1) {
      num1 = array[i];
      index = i;
    }
  }

  array.splice(index, 1);
  console.log(num1);

  for (const num of array) {
    if (num < num2) {
      num2 = num;
    }
  }
  console.log(num2);
  return num1 + num2;
}
//---------------------------------------------------
// Exercise 2.2:
function binaryArrayToDecimal(binaryArray) {
  // hold the decimal value
  let decimal = 0;
  // Iterate over the binary array
  for (let i = 0; i < binaryArray.length; i++) {
    decimal = decimal * 2 + binaryArray[i];
    // decimal = 0 * 2 + 0 = 2
    // decimal = 1 * 2 + 1 = 4
    // decimal = 0 * 2 + 2 = 2
    // decimal = 1 * 2 + 3 = 5
  }

  return decimal;
}
//---------------------------------------------------
// Exercise 2.3:
function nextPerfectSquare(number) {
  const square = Math.sqrt(number);

  if (Number.isInteger(Math.sqrt(number))) {
    return (nextNumber = (Math.sqrt(number) + 1) * (Math.sqrt(number) + 1));
  } else {
    return -1;
  }
}
//---------------------------------------------------
// Exercise 2.4:
function findUniq(array) {
  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    let firstIndex = array.indexOf(currentItem);
    let lastIndex = array.lastIndexOf(currentItem);

    if (firstIndex === lastIndex) {
      return currentItem;
    }
  }
}
//---------------------------------------------------
// Exercise 2.5:
function summation(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
// OR
function summation(num) {
  return (num * (num + 1)) / 2;
}
//---------------------------------------------------
// Exercise 2.6:
function centuryFromYear(year) {
  year = Math.ceil(year / 100);
  return year;
}
// arrow function
const centuryFromYear2 = (year) => Math.ceil(year / 100);
//---------------------------------------------------
// Exercise 2.7:
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}
//---------------------------------------------------
// Exercise 3.1:
function nb_year(p0, percent, aug, p) {
  let currentPopulation = p0;
  let years = 0;
  for (let year = 0; currentPopulation < p; year++) {
    currentPopulation += (currentPopulation * percent) / 100 + aug;
    years += 1;
  }
  return years;
}
//---------------------------------------------------
// Exercise 3.2:
function busStopsPeople(busStops) {
  let totalPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    let currentStop = busStops[i];
    let getOn = currentStop[0];
    let getOff = currentStop[1];

    totalPeople += getOn;
    totalPeople -= getOff;
  }
  return totalPeople;
}
//---------------------------------------------------
// Exercise 4.1:
function Fibonacci(number) {
  number = Math.max(number, 1);

  let startFibonacci = [0, 1];
  let firstNumber = startFibonacci[0];
  let secondNumber = startFibonacci[1];
  for (let i = 2; i < number; i++) {
    let currentNumber = firstNumber + secondNumber;
    startFibonacci.push(currentNumber);
    firstNumber = secondNumber;
    secondNumber = currentNumber;
  }
  return startFibonacci;
}
//---------------------------------------------------
// Exercise 4.2:
function tribonacci(array, number) {
  number = Math.max(number, 1);

  let startTribonacci = array.slice(0, 3);

  for (let i = 3; i < number; i++) {
    let currentNumber =
      startTribonacci[i - 1] + startTribonacci[i - 2] + startTribonacci[i - 3];
    startTribonacci.push(currentNumber);
  }
  return startTribonacci.slice(0, number);
}
//---------------------------------------------------
// Exercise 5.1:
function removeChars(string) {
  stringArr = string.split("").slice(1, -1).join("");
  return stringArr;
}

// arrow function:
const removeChars2 = (string) => string.split("").slice(1, -1).join("");
//---------------------------------------------------
// Exercise 5.2:
function repeatString(num, str) {
  return str.repeat(num);
}

// arrow function
const repeating = (num, str) => str.repeat(num);
//---------------------------------------------------
// Exercise 5.3:
function toCamelCase(str) {
  let newStr = "";
  if (str) {
    let wordArr = str.split(/[-_]/);
    console.log(wordArr);
    for (let i in wordArr) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
}
//---------------------------------------------------
// Exercise 5.4:
function weirdCase(str) {
  return str.replace(
    /./g,
    (
      matchChar,
      index // /./g = represent a global search for any character in a string
    ) => (index % 2 === 0 ? matchChar.toUpperCase() : matchChar.toLowerCase())
  );
}
//---------------------------------------------------
// Exercise 5.5:
function convertStr(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

// arrow function:
const convertStr2 = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
//---------------------------------------------------
// Exercise 5.6:
function maskCreditCard(cardNum) {
  let hideCardNum = [];
  for (let i = 0; i < cardNum.length; i++) {
    if (i < cardNum.length - 4) {
      hideCardNum.push("#");
    } else {
      hideCardNum.push(cardNum[i]);
    }
  }
  return hideCardNum.join("");
}
//---------------------------------------------------
// Exercise 5.7:
function shortWord(string) {
  strArr = string.split(" ");
  shortestWord = strArr[0];
  for (i = 0; i < strArr.length; i++) {
    if (shortestWord.length > strArr[i].length) {
      shortestWord = strArr[i];
    }
  }
  return shortestWord;
}
//---------------------------------------------------
// Exercise 5.8:
function longestWord(string) {
  strArr = string.split(" ");
  longWord = strArr[0];
  for (i = 0; i > strArr.length; i++) {
    if (longWord.length > strArr[i].length) {
      longWord = strArr[i];
    }
  }
  return longWord;
}
//---------------------------------------------------
// Exercise 6.1:
function repeatStr(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const newStr = string[i].toLowerCase();
    let word = "";
    for (let j = 0; j <= i; j++) {
      word += newStr;
    }
    word = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(word);
  }
  return result.join("-");
}
//---------------------------------------------------
// Exercise 6.2:
function countAlphabeticChars(chars) {
  chars = chars.toLowerCase();
  const arr = chars.split("");
  const count = {};
  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
}
//---------------------------------------------------
// Exercise 6.3:
function sorting(s1, s2) {
  const mergedArr = s1.split(" ") + s2.split(" ");
  const uniqueArr = [...new Set(mergedArr)]; // new Set ensures that no duplicate values are stored in the set
  const finalStr = uniqueArr.sort().join("");
  return finalStr;
}
//---------------------------------------------------
// Exercise 6.4:
function isIsogram(string) {
  const arr = string.split("");
  const newArr = arr.every((char, index) => string.indexOf(char) == index);
  return newArr;
}

//  arrow function:
const isIsogramStr = (string) =>
  string.split("").every((char, index) => string.indexOf(char) == index);
//---------------------------------------------------
// Exercise 7:
// filter method implementation:
Array.prototype.myFilter = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

// a test
const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrFiltered = someArr.myFilter(function (element) {
  return element % 2 === 0;
});

console.log(arrFiltered);

// map method implementation:
Array.prototype.myMap = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i += 1) {
    array.push(callback(this[i]));
  }
  return array;
};

// a test
const someArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMapped = someArr2.myMap(function (element) {
  return element * 2;
});

console.log(arrMapped);

// forEach method implementation:
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
};

// a test
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.myForEach(function (book) {
  console.log(book.title.toUpperCase());
});
//---------------------------------------------------
// Exercise 8:
function findPerimeter(width, height) {
  return 2 * (width + height);
}

// arrow function
const findPerimeter2 = (width, height) => 2 * (width + height);
