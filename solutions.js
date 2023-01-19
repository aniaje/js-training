// codewars kata name above each solution

// Fizz Buzz

function fizzbuzz(n) {
  const numbers = [...Array(n).keys()].map((i) => {
    const initialVal = i + 1;
    if (initialVal % 3 === 0 && initialVal % 5 === 0) {
      return "FizzBuzz";
    } else if (initialVal % 3 === 0) {
      return "Fizz";
    } else if (initialVal % 5 === 0) {
      return "Buzz";
    } else {
      return initialVal;
    }
  });

  return numbers;
}

// My head is at the wrong end!

function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Are they square?

const isSquare = (arr) => {
  return arr.length
    ? !arr.some((item) => {
        return Math.sqrt(item) % 1 !== 0;
      })
    : undefined;
};

// Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// How many are smaller than me?

function smaller(nums) {
  const result2 = nums.map((item, index, arr) => helper(arr, item, index));
  return result2;
}

function helper(arr, number, index) {
  let result = 0;
  for (let i = index + 1; i < arr.length; i++) {
    let nextNumber = arr[i];
    if (number > nextNumber) {
      result++;
    }
  }
  return result;
}

// MinMinMax

function minMinMax(array) {
  const smallest = Math.min(...array);
  const largest = Math.max(...array);

  // const result = [];
  // for (let i = smallest; i <= largest; i++) {
  //   result.push(i);
  // }

  // const absent = result.filter((number) => !array.includes(number));
  let interator = smallest;
  let absent;

  while (absent === undefined) {
    if (!array.includes(++interator)) {
      absent = interator;
    }
  }
  return [smallest, absent, largest];
  // const minimumAbsent = Math.min(...absent);
}

// Opposites Attract

function lovefunc(flower1, flower2) {
  const petals1 = flower1 % 2 == 0;
  const petals2 = flower2 % 2 == 0;
  return petals1 != petals2;
}

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n);
}

// Remove anchor from URL

function removeUrlAnchor(url) {
  if (url.includes("#")) {
    const index = url.indexOf("#");
    return url.substring(index, "");
  } else {
    return url;
  }
}

// Sum The Strings

function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

// Largest Elements

function largest(n, xs) {
  let sorted = xs.sort((a, b) => b - a);
  return sorted.slice(0, n).sort((a, b) => a - b);
}

// Form The Minimum

function minValue(values) {
  const removed = [...new Set(values)];

  return parseInt(removed.sort((a, b) => a - b).reduce((a, b) => a + b, ""));
}

// Sort the odd

function sortArray(array) {
  console.log(array);

  const sortedOdds = array.filter((int) => int % 2 !== 0).sort((a, b) => a - b);
  let i = 0;
  return array.map((int) => {
    if (int % 2 == 0) {
      return int;
    } else {
      console.log(sortedOdds);
      return sortedOdds[i++];
    }
  });
}

// Count by X

function countBy(x, n) {
  const arr = [];
  for (let i = x; i <= n * x; i += x) {
    arr.push(i);
  }
  return arr;
}

// String repeat

function repeatStr(n, s) {
  let result = "";
  for (i = 0; i < n; i++) {
    result += s;
  }

  return result;
}

// Testing 1-2-3

const number = (array) => {
  return array.map((item, index) => `${index + 1}: ${item}`);
};

// Find the unique number

function findUniq(arr) {
  let [a, b] = [...new Set(arr)];
  return arr.indexOf(a) === arr.lastIndexOf(a) ? a : b;
}
17;
8;
// Powers of 2

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) arr[i] = 2 ** i;
  return arr;
}

// Sort Numbers

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  let avCallback = (a, b) => a + b;
  let avStart = 0;
  let average = classPoints.reduce(avCallback, avStart) / classPoints.length;

  return average < yourPoints;
}

// Sort array by string length

function sortByLength(array) {
  let sorted = array.sort((a, b) => a.length - b.length);
  return sorted;
}

// Small enough? - Beginner

function smallEnough(a, limit) {
  return !(Math.max(...a) > limit);
}

// return Math.max(...a) > limit ? false : true;

// The highest profit wins!

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Find Maximum and Minimum Values of a List

var min = function (list) {
  let min = Math.min(...list);
  return min;
};

var max = function (list) {
  let max = Math.max(...list);
  return max;
};

// Grasshopper - Terminal game combat function

function combat(health, damage) {
  const life = health - damage;
  return life > 0 ? life : 0;
}

// Beginner - Lost Without a Map

function maps(x) {
  return x.map((el) => el * 2);
}

// Vowel remover

function shortcut(string) {
  const v = ["a", "e", "i", "o", "u"];

  return Array.from(string)
    .filter((el) => !v.includes(el))
    .join("");
}

// Filter out the geese

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((item) => !geese.includes(item));
  console.log(result);
  // return an array containing all of the strings in the input array except those that match strings in geese
}

// Cat years, Dog years

const humanYearsCatYearsDogYears = (humanYears) => {
  const firstYears = [15, 9];
  firstYears.length = humanYears;

  const catYears = [...firstYears].fill(4, 2);
  const dogYears = [...firstYears].fill(5, 2);
  console.log(catYears.reduce((a, b) => a + b, 0));

  return [
    humanYears,
    catYears.reduce((a, b) => a + b, 0),
    dogYears.reduce((a, b) => a + b, 0),
  ];
};

humanYearsCatYearsDogYears(10);

// You Can't Code Under Pressure #1

function doubleInteger(i) {
  const b = i * 2;
  return b;
}

// Find Multiples of a Number

function findMultiples(integer, limit) {
  let multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}

// Remove String Spaces

function noSpace(x) {
  let noSp = x.split(" ").join("");

  return noSp;
}

// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  let numbers = [a, b];
  let first = Math.min(...numbers);
  let last = Math.max(...numbers);

  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
  // }
  // last monthRefactor
  function getSum(a, b) {
    let numbers = [a, b];

    let first = Math.min(...numbers);
    let last = Math.max(...numbers);

    let sum = 0;

    while (first <= last) {
      sum += first;
      first++;
    }
    return sum;
  }

  // Function 2 - squaring an argument

  const square = (x) => x * x;

  // Filling an array (part 1)

  const arr = (N) => {
    if (N === undefined) {
      return [];
    }
    return [...Array(N).keys()];
  };

  // Find the stray number

  function stray(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
  }

  // Removing Elements

  function removeEveryOther(arr) {
    return arr.filter(function (v, i, arr) {
      return i % 2 === 0;
    });
  }

  // Parse nice int from char problem

  function getAge(inputString) {
    return Number(inputString[0]);
  }

  // Count characters in your string

  function count(string) {
    let obj = {};
    for (let str of string) {
      obj[str] = obj.hasOwnProperty(str) ? obj[str] + 1 : 1;
    }
    return obj;
  }

  // You only need one - Beginner

  function check(a, x) {
    return a.includes(x);
  }

  // List Filtering

  function filter_list(l) {
    return l.filter((v) => typeof v === "number" && v >= 0);
  }

  // Keep up the hoop

  function hoopCount(n) {
    return n >= 10
      ? "Great, now move on to tricks"
      : "Keep at it until you get it";
  }

  // Highest Scoring Word

  // const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  // const smallLetters = caps.map((letter) => letter.toLowerCase());

  // function wordScore(word) {
  //   let score = 0;
  //   for (let j = 0; j < word.length; j++) {
  //     let char = word[j];
  //     score += (smallLetters.indexOf(char) + 1);
  //   }
  //   return score;
  // }

  // function high(x) {
  //   let bestWord = "";
  //   let bestScore = 0;
  //   words = x.split(" ");
  //   for (let i = 0; i < words.length; i++) {
  //     let word = words[i];
  //     let score = wordScore(word);
  //     if (score > bestScore) {
  //       bestScore = score;
  //       bestWord = word;
  //     }
  //   }
  //   return bestWord;
  // }

  function high(x) {
    const ScoreTable = [
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    return x
      .split(" ")
      .map((word) => {
        let code = 0;
        word.split("").map((letter) => (code += ScoreTable.indexOf(letter)));
        return [word, code];
      })
      .sort((a, b) => b[1] - a[1])[0][0];
  }

  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  const smallLetters = caps.map((letter) => letter.toLowerCase());

  function wordScore(word) {
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      score += smallLetters.indexOf(char) + 1;
    }
    return score;
  }

  function high(x) {
    let bestWord = "";
    let bestScore = 0;
    words = x.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let score = wordScore(word);
      if (score > bestScore) {
        bestScore = score;
        bestWord = word;
      }
    }
    return bestWord;
  }

  // Volume of a Cuboid

  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }

  // Sum Mixed Array

  function sumMix(x) {
    return x.map((item) => Number(item)).reduce((a, b) => a + b);
  }

  // Grasshopper - Grade book

  function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    console.log(score);
    let grade = "";

    if (score >= 90 && score <= 100) {
      grade = "A";
    } else if (score >= 80 && score < 90) {
      grade = "B";
    } else if (score >= 70 && score < 80) {
      grade = "C";
    } else if (score >= 60 && score < 70) {
      grade = "D";
    } else {
      grade = "F";
    }

    return grade;
  }

  // Function 1 - hello world

  greet = () => "hello world!"; // Write a function "greet" that returns "hello world!"

  //  Set Alarm

  function setAlarm(employed, vacation) {
    return employed && !vacation ? true : false;
  }
  2;
  6;

  function likes(names) {
    let message = "";
    if (names.length > 3) {
      message = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    } else if (names.length === 3) {
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length === 2) {
      message = `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 1) {
      message = `${names[0]} likes this`;
    } else {
      message = "no one likes this";
      console.log(names);
    }
    return message;
  }

  // Sum of two lowest positive integers

  function sumTwoSmallestNumbers(numbers) {
    let array = numbers.sort((a, b) => a - b);
    return array[0] + array[1];
  }

  // Convert a Number to a String!

  function numberToString(num) {
    return String(num);
  }

  // String ends with?

  function solution(str, ending) {
    return str.endsWith(ending) ? true : false;
  }

  // Square(n) Sum

  function squareSum(numbers) {
    const sum = numbers.map((number) => number * number);
    return sum.reduce((a, b) => a + b, 0);
  }

  // Convert number to reversed array of digits

  function digitize(n) {
    return String(n)
      .split("")
      .reverse()
      .map((n) => parseInt(n, 10));
  }
  2;

  // Descending Order

  function descendingOrder(n) {
    const sorted = String(n)
      .toString()
      .split("")
      .sort((a, b) => b - a);

    return Number(sorted.join(""));
  }

  // Are You Playing Banjo?

  function areYouPlayingBanjo(name) {
    return name[0] === "r" || name[0] === "R"
      ? `${name} plays banjo`
      : `${name} does not play banjo`;
  }

  // Reversed sequence

  const reverseSeq = (n) => {
    return [...Array(n)].map((e, i) => i + 1).sort((a, b) => b - a);
  };

  // Count the smiley faces!

  function countSmileys(arr) {
    let correctSmile = 0;

    for (let i = 0; i < arr.length; i++) {
      let smileLength = arr[i].length;
      console.log(smileLength, i);

      if (smileLength == 3) {
        let haveEyes =
          arr[i][0].includes(":") || arr[i][0].includes(";") ? true : false;
        let haveNose =
          arr[i][1].includes("-") || arr[i][1].includes("~") ? true : false;
        let haveMouth =
          arr[i][2].includes(")") || arr[i][2].includes("D") ? true : false;
        haveEyes && haveNose && haveMouth && correctSmile++;
        console.log(haveEyes, haveNose, haveMouth);
      } else if (smileLength == 2) {
        let haveEyes =
          arr[i][0].includes(":") || arr[i][0].includes(";") ? true : false;
        let haveMouth =
          arr[i][1].includes(")") || arr[i][1].includes("D") ? true : false;
        haveEyes && haveMouth && correctSmile++;
      }
    }

    return correctSmile;
  }

  // Count of positives / sum of negatives

  function countPositivesSumNegatives(input) {
    let positives = [];
    let negatives = 0;
    if (Array.isArray(input) && input.length > 0) {
      input.map((n) => {
        if (n > 0) {
          return positives.push(n).length;
        } else if (n < 0) {
          return (negatives += n);
        }
      });
      console.log([positives.length, negatives]);
      return [positives.length, negatives];
    } else {
      return [];
    }
  }

  // Keep Hydrated!

  function litres(time) {
    return Math.floor(Math.floor(time) * 0.5);
  }

  // Convert a string to an array

  function stringToArray(string) {
    return string.split(" ");
  }

  // Find the smallest integer in the array

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      const sorted = args.sort((a, b) => a - b);
      return parseInt(sorted.filter((a) => a === sorted[0]));
    }
  }

  // Remove exclamation marks

  function removeExclamationMarks(s) {
    return s.split("!").join("");
  }

  // MakeUpperCase

  function makeUpperCase(str) {
    return str.toUpperCase();
  }

  // Sum of positive

  function positiveSum(arr) {
    if (arr.length > 0) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
      }
      return sum;
    } else {
      return 0;
    }
  }

  // Square Every Digit

  function squareDigits(num) {
    return Number(
      num
        .toString()
        .split("")
        .map((n) => Math.pow(n, 2))
        .join("")
    );
  }

  // Abbreviate a Two Word Name

  function abbrevName(name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join(".")
      .toUpperCase();
  }

  // A Needle in the Haystack

  function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
  }

  // Grasshopper - Summation

  const summation = function (num) {
    const array = [...new Array(num)].map((e, i) => i + 1);
    return array.reduce((a, b) => a + b, 0);
  };

  // Reverse words

  function reverseWords(str) {
    return str
      .split(" ")
      .map((word) => [...word].reverse().join(""))
      .join(" ");
  }

  // Sum without highest and lowest number

  function sumArray(array) {
    if (Array.isArray(array)) {
      const newArray = array.sort((a, b) => a - b);

      let sum = 0;
      for (let i = 1; i <= array.length - 2; i++) {
        sum += array[i];
      }
      return sum;
    } else {
      return 0;
    }
  }

  function sumArray(array) {
    if (Array.isArray(array)) {
      const maxN = array.indexOf(Math.max(...array));
      array.splice(maxN, 1);
      const minN = array.indexOf(Math.min(...array));
      array.splice(minN, 1);
    } else {
      return 0;
    }
    let sumOfNumers = array.reduce((a, b) => {
      a = a + b;
      return a;
    }, 0);
    return sumOfNumers;

    //   if (array !== null && array.length > 2) {
    //     const maxN = array.indexOf(Math.max(...array));
    //     array.splice(maxN, 1);
    //     const minN = array.indexOf(Math.min(...array));
    //     array.splice(minN, 1);
    //   } else {
    //     return 0;
    //   }
    //   let sumOfNumers = array.reduce((a, b) => {
    //     a = a + b;
    //     return a;
    //   }, 0);
    //   return sumOfNumers;
  }

  // If you can't sleep, just count sheep!!

  const countSheep = function (num) {
    const array = [...new Array(num)].map((e, i) => i + 1);
    const sheeps = [];
    array.map((n) => sheeps.push(`${array[n - 1]} sheep...`));
    return (shStr = sheeps.join(""));
  };

  // Number of People in the Bus

  number = (busStops) => {
    const passangers = busStops.flat();
    const oddOut = [];
    const evenIn = [];
    for (let i = 0; i < passangers.length; i++)
      (i % 2 == 0 ? evenIn : oddOut).push(passangers[i]);
    return (
      evenIn.reduce((a, b) => a + b, 0) - oddOut.reduce((a, b) => a + b, 0)
    );
  };

  // Returning Strings

  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }

  // Complementary DNA

  // function DNAStrand(dna) {
  //   const dnaArr = [...dna];

  //   let newDna = [];
  //   let finalWord = "";
  //   for (let i = 0; i < dnaArr.length; i++) {
  //     if (dnaArr[i] == "A") {
  //       newDna[i] = "T";
  //       finalWord = finalWord + "T";
  //     } else if (dnaArr[i] == "T") {
  //       newDna[i] = "A";
  //       finalWord = finalWord + "A";
  //     } else if (dnaArr[i] == "G") {
  //       newDna[i] = "C";
  //       finalWord = finalWord + "C";
  //     } else if (dnaArr[i] == "C") {
  //       newDna[i] = "G";
  //       finalWord = finalWord + "G";
  //     }
  //   }

  //   return finalWord;
  // }

  function DNAStrand(dna) {
    const dnaDict = { T: "A", A: "T", C: "G", G: "C" };
    return dna.replace(/[a-z]/gi, (m) => dnaDict[m]);
  }

  // Highest and Lowest

  function highAndLow(numbers) {
    const stringNum = Array.from(numbers.split(" "), Number);
    return `${Math.max(...stringNum)} ${Math.min(...stringNum)}`;
  }

  function highAndLow(numbers) {
    const stringNum = Array.from(numbers.split(" "), Number);
    const smallAndBig = `${Math.max(...stringNum)} ${Math.min(...stringNum)}`;
    return smallAndBig;
  }

  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }

  // Vowel Count

  function getCount(str) {
    const word = Array.from(str);
    const vowels = ["a", "e", "i", "o", "u"];
    const matching = word.filter((element) => vowels.includes(element));
    return matching.length;
  }

  // Convert boolean values to strings 'Yes' or 'No'.

  function boolToWord(bool) {
    return bool == true ? "Yes" : "No";
  }

  // Total amount of points

  function points(games) {
    let xScore = [];
    games.map((game) => {
      if (game[0] > game[2]) {
        xScore.push(3);
        console.log(xScore);
      } else if (game[0] == game[2]) {
        xScore.push(1);
      }
    });
    let xScoreSum;
    xScoreSum = xScore.reduce((a, b) => a + b, 0);
    console.log(xScoreSum);
    return xScoreSum;
  }

  // Simple multiplication

  function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9;
  }

  // Calculate average

  function findAverage(array) {
    return array.toString() ? array.reduce((a, b) => a + b) / array.length : 0;
  }

  // Reversed Strings

  function solution(str) {
    return str.split("").reverse().join("");
  }

  // Grasshopper - Personalized Message

  // function greet (name, owner) {

  //   return name == owner ? "Hello boss" : "Hello guest"
  // }

  function greet(name, owner) {
    return `Hello ` + (name == owner ? "boss" : "guest");
  }

  // Beginner Series #1 School Paperwork

  // function paperwork(n, m) {
  //   let result
  // if(n < 0 || m < 0) {
  //     return 0
  //   } else {
  // result  = n * m
  //   }
  //   return result
  // }

  function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0;
    } else {
      return m * n;
    }
  }

  // Invert values

  // function invert(array)  {
  // return array.map(item => item * (-1) )
  // }

  // function invert(array)  {
  // return array.map(item => (
  //   item * (-1) )
  // )
  // }

  function invert(array) {
    return array.map((item) => item * -1);
  }

  // Calculate BMI

  function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
      return "Underweight";
    } else if (bmi <= 25) {
      return "Normal";
    } else if (bmi <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  // Beginner - Reduce but Grow

  function grow(x) {
    return (result = x.reduce((a, b) => a * b));
  }

  // Return Negative

  // function makeNegative(num) {
  // let newNum
  // if(num > 0) {
  //   newNum = num * (-1)
  // } else if (num <= 0)  {
  //   newNum = num }
  //   return newNum
  // }

  // function makeNegative(num) {
  // if(num > 0) {
  // return ( num * (-1) )
  // }
  //   else if (num <= 0)  {
  //       return num
  //  }
  // }

  // function makeNegative(num) {
  // if(num > 0) {
  // return ( num * (-1) )
  // }
  // return num
  //   }

  // function makeNegative(num) {
  // (num > 0) ? ( num = num * (-1)) : num
  //    return num
  // }

  function makeNegative(num) {
    return num > 0 ? num * -1 : num;
  }

  // Counting sheep...

  function countSheeps(arrayOfSheep) {
    const count = arrayOfSheep.filter(Boolean).length;
    return count;
  }

  // Multiply

  function multiply(a, b) {
    return a * b;
  }

  function noBoringZeros(n) {
    let skipZero = true;
    const callback = (prevVal, currentVal) => {
      if (currentVal === "0" && skipZero) {
        return prevVal;
      } else {
        skipZero = false;
        return prevVal + currentVal;
      }
    };
    let result = [...n.toString()]
      .reverse()
      .reduce(callback, "")
      .split("")
      .reverse()
      .join("");

    const result2 = parseInt(result);
  }
  noBoringZeros(1450);

  const func = (n) => {
    const callback = (prevVal, currentVal) => {
      if (currentVal > prevVal) {
        return currentVal;
      }
      return prevVal;
    };
    const result = n.reduce(callback, 0);
    return result;
  };
  func([118, 117, 120, 99, 100, 50]);
}

// Add Length

function addLength(str) {
  const result = str.slice().split(" ");
  return result.map((word) => `${word} ${word.length}`);
}

// Remove the minimum

function removeSmallest(numbers) {
  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);

  const callback = (prevVal, currentVal, i) => {
    if (i !== index) {
      return [...prevVal, currentVal];
    } else {
      return prevVal;
    }
  };
  const result = numbers.reduce(callback, []);
  return result;
}

// Numbers to Objects

function numObj(s) {
  const result = s.map((item) => {
    let obj = { [item]: String.fromCharCode(item) };
    return obj;
  });
  return result;
}

// Flatten and sort an array

function flattenAndSort(array) {
  return array.flat(Infinity).sort((a, b) => a - b);
}

// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  const result = [...arr1, ...arr2];
  result.sort((a, b) => a - b);
  return Array.from(new Set(result));
}

// Are they the "same"?

function comp(array1, array2) {}

// Make the small words big!
function smallWordHelper(sentence) {
  let vowels = /[aeiou]/gi;
  let sentenceArr = sentence.split(" ");
  let result = sentenceArr
    .map((item) => {
      item = item.length <= 3 ? item.toUpperCase() : item;
      if (item.length >= 4) {
        let abc = item.match(vowels);

        abc.forEach((vowel) => (item = item.replace(vowel, "")));
      }

      return item;
    })
    .join(" ");

  return result;
}

smallWordHelper("The quick brown fox jumps over the lazy dog");

// Find the Missing Number

function missingNo(nums) {
  let missing = null;
  let i = 0;

  while (missing === null) {
    if (!nums.includes(i)) {
      missing = i;
    }
    i++;
  }

  return missing;
}
//key value pairs
//dodawanie

missingNo([
  9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
  94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
  19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
  55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
  16,
]);

// Convert a Boolean to a String

function booleanToString(b) {
  return b.toString();
}

// Convert a String to a Number!

const stringToNumber = function (str) {
  return Number(str);
};

// Beginner Series #2 Clock

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Ones and Zeros

const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};

// Last Survivor

function lastSurvivor(letters, coords) {
  if (coords.length > 0) {
    let coordinate = coords[0];
    letters = letters.split("");
    letters.splice(coordinate, 1);
    letters = letters.join("");
    coords.splice(0, 1);
    return lastSurvivor(letters, coords);
  } else {
    return letters;
  }
}

console.log(lastSurvivor("kbc", [0, 1]));

// Convert an array of strings to array of numbers

function toNumberArray(stringarray) {
  return stringarray.map((item) => Number(item));
}

toNumberArray(["1.1", "2.2", "3.3"]);

// pick a set of first elements
let arr = ["a", "b", "c", "d", "e"];

function first(arr, n) {
  const result = arr.slice(0, n);
}

first([...arr], 2);

// Nth Smallest Element (Array Series #4)

function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

nthSmallest([2, 169, 13, -5, 0, -1], 4);

// Sum of differences in array

function sumOfDifferences(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let sum = 0;
  sorted.forEach((num, i) => {
    let pairSum = i !== sorted.length - 1 ? num - sorted[i + 1] : 0;
    sum += pairSum;
  });
  return sum;
}

sumOfDifferences([1, 2, 10]);
